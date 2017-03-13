
;
$.fn.iframesTabs = function (options) {
    var self = this;
    var options = $.extend({
        setupContextMenu: true
    }, options || {});
    var tabs = new IframeTabs(self, options);
    if (options.setupContextMenu) {
        tabs.setupContextMenu();
    }
    return tabs;
};

function IframeTabs(self, options) {
    var self = self;
    this.hashtable = new Array();
    this.options = $.extend({
        //锁定Tab，不允许关闭
        lock: false,
        //禁止选中Tab
        disable: false,
        //每个Tab是否生成关闭按钮
        close: true,
        //当只有一个Tab页面时是否锁定该Tab
        lockOnlyOne: true,
        //Tab用于显示Panel的容器
        panelContainer: (function () {
            var tick = new Date().getTime();
            var panelElement = $('<div id="cleverTabsPanelContainer' + tick + '"></div>');
            self.append(panelElement);
            return panelElement;
        })(),
        //Tab用于控制的头模板
        tabHeaderTemplate: '<li id="cleverTabHeaderItem-#{id}" class="#{liclass}"><a href="#" title="#{title}">#{label}</a></li>',
        //Tab用于显示的Panel模板
        tabPanelTemplate: '<div id="cleverTabPanelItem-#{id}" style="height: 100%;"><iframe frameBorder="0" style="width: 100%; display: inline; height: 100%;" src="#{src}"></iframe></div>',
        //Tab唯一id生成器
        uidGenerator: function () { return new Date().getTime(); }

    }, options || {});

    self.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
    this.wrapper = self;
    var el = self.find('ol,ul').eq(0);
    this.element = el;
    this.element.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
    var pc = this.options.panelContainer;
    this.panelContainer = pc;
    if (!this.panelContainer.hasClass('ui-tabs')) {
        this.panelContainer.addClass('ui-tabs');
    }
    this.panelContainer.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");
    this.lockOnlyOne = this.options.lockOnlyOne;
    if (this instanceof IframeTabs) {
        IframeTabs.prototype.resizePanelContainer = function () {
            
            var w =$(window).height();
            // console.log(w);
            // console.log(el.height())
            // console.log(self.height())

            if (pc.attr('id').indexOf('cleverTabsPanelContainer') === 0) {
            //     var height = self.height() - el.height() - 30;
                    var height = w - 120;
                pc.css('height', height + 'px');
            }
        }
    }
};

IframeTabs.prototype.add = function (options) {
    var self = this;
    var uid = self.options.uidGenerator(self);

    var options = $.extend({
        id: uid,
        url: '#',
        label: 'New Tab',
        closeRefresh: null,
        closeActivate: null,
        callback: function () { }
    }, options || {});


    var exsitsTab = self.getTabByUrl(options.url);
    if (exsitsTab) {
        if (!exsitsTab.activate()) {
            return false;
        }
    }


    var tabHeader = $(self.options.tabHeaderTemplate
    .replace(/#\{id\}/g, options.id)
    .replace(/#\{liclass\}/g, 'ui-state-default ui-corner-top')
    .replace(/#\{title\}/g, options.label)
    .replace(/#\{label\}/g, function () {

        if (options.label.length > 7) {
            return options.label.substring(0, 7) + '...';
        }
        return options.label;
    } ()));


    tabHeader.bind("click", function () {
        if (!$(this).hasClass('ui-state-disabled')) {
            tab.activate();
        }
    });

    tabHeader.bind('mouseover', function () {
        if (!$(this).hasClass('ui-state-disabled')) {
            $(this).addClass('ui-state-hover');
        }
    });

    tabHeader.bind('mouseout', function () {
        if (!$(this).hasClass('ui-state-disabled')) {
            $(this).removeClass('ui-state-hover');
        }
    });

    var panel = $(self.options.tabPanelTemplate
        .replace(/#\{id\}/g, options.id)
        .replace(/#\{src\}/g, options.url.toLowerCase()));

    self.element.append(tabHeader);

    // if (self.panelContainer.attr('id').indexOf('cleverTabsPanelContainer') === 0) {
    //     var height = self.wrapper.height() - self.element.height() - 30;
    //     self.panelContainer.css('height', Math.floor(height / self.wrapper.height() * 100) + '%');
    // }

    self.panelContainer.append(panel);
    self.hashtable[options.id] = { 'callback': options.callback, 'closerefresh': options.closeRefresh, 'closeactivate': options.closeActivate, 'orgLock': options.lock };
    var tab = new IframeTab(self, options.id);
    tab.setLock(options.locked);
    tab.activate();
    return tab;
};

IframeTabs.prototype.setupContextMenu = function () {

}

IframeTabs.prototype.getCurrentUniqueId = function () {
    var self = this;
    if (self.element.find(' > li').size() > 0) {
        var current = self.element.find('li.ui-tabs-selected');
        return current.size() > 0 ? IframeTab.getUniqueByHeaderId(current.attr('id')) : null;
    } else {
        return null;
    }
}

IframeTabs.prototype.getCurrentTab = function () {
    var self = this;
    var uid = self.getCurrentUniqueId();
    return uid ? new IframeTab(self, self.getCurrentUniqueId()) : null;
}

IframeTabs.prototype.getTabByUrl = function (url) {
    if (!url) {
        return null;
    }
    var self = this;
    var frames = self.panelContainer.find('div[id^="cleverTabPanelItem-"]>iframe');
    var tab;
    for (i = 0; i < frames.size(); i++) {
        var frame = $(frames[i]);
        var src = frame.attr('src');
        if (src.indexOf('clever_tabs_time_stamp=') > 0) {
            src = src.substring(0, src.indexOf('clever_tabs_time_stamp=') - 1);
        }
        if (src == url.toLowerCase()) {
            tab = new IframeTab(self, IframeTab.getUniqueByPanelId(frame.parent('div:first').attr('id')));
        }
    }
    return tab;
}

IframeTabs.prototype.clear = function () {
    var self = this;
    var lis = self.element.find('>li');
    var hasLock = self.element.find('span.ui-icon-locked').size() > 0;
    for (i = self.lockOnlyOne && !hasLock ? 1 : 0; i < lis.size(); i++) {
        var id = IframeTab.getUniqueByHeaderId(lis.eq(i).attr('id'));
        var tab = new IframeTab(self, id);
        tab.kill();
    }
}

function IframeTab(tabs, id) {
    this.tabs = tabs;
    this.id = id
    this.header = this.tabs.element.find('li#' + IframeTab.getFullHeaderId(id));
    this.headerId = this.header.attr('id');
    this.disable = this.header.hasClass('ui-state-disabled');
    this.lock = this.header.find('span.ui-icon-locked').size() != 0;
    this.panel = tabs.panelContainer.find('div#' + IframeTab.getFullPanelId(id));
    this.panelId = this.panel.attr('id');
    this.label = (this.header ? this.header.find('a:first').attr('title') : null);
    this.url = (this.panel ? this.panel.find(' > iframe:first').attr('src') : null);
    this.callback = this.tabs.hashtable[id].callback;
    this.closeRefresh = this.tabs.hashtable[id].closerefresh;
    this.closeActivate = this.tabs.hashtable[id].closeactivate;
    // this.closeRefresh = this.tabs.hashtable[id].closeRefresh;
    // this.closeActivate = this.tabs.hashtable[id].closeActivate;
    this.orgLock = this.tabs.hashtable[id].orgLock;
};

IframeTab.prototype.deactivate = function () {
    var self = this;
    self.header.removeClass('ui-tabs-selected ui-state-active');
    self.panel.addClass('ui-tabs-hide');

    if (self.tabs.lockOnlyOne && !self.tabs.hashtable[self.id].orgLock && self.tabs.element.find('>li').size() > 1) {
        self.setLock(false);
    }
}

IframeTab.prototype.activate = function () {
    var self = this;

    if ($.browser.msie) {
        self.header.find('a').trigger('blur');
    }

    if (self.disable) {
        return false;
    }

    var currentTab = self.tabs.getCurrentTab();
    if (currentTab) {
        if (currentTab.id == self.id) {
            return false;
        }

        currentTab.deactivate();
    }

    self.header.addClass('ui-tabs-selected ui-state-active');
    self.panel.removeClass('ui-tabs-hide');

    if (self.tabs.lockOnlyOne && self.tabs.element.find('>li').size() == 1) {
        self.setLock(true, false);
    }
}

IframeTab.prototype.prevTab = function () {
    var self = this;
    var prev = self.header.prev();
    if (prev.size() > 0) {
        var headerId = prev.attr('id');
        return new IframeTab(tabs, IframeTab.getUniqueByHeaderId(headerId));
    } else {
        return null;
    }
}

IframeTab.prototype.nextTab = function () {
    var self = this;
    var next = self.header.next();
    if (next.size() > 0) {
        var headerId = next.attr('id');
        return new IframeTab(tabs, IframeTab.getUniqueByHeaderId(headerId));
    } else {
        return null;
    }
}

IframeTab.prototype.kill = function () {
    var self = this;
    if (self.lock) {
        return;
    }
    var nextTab = self.nextTab();
    if (!nextTab) {
        nextTab = self.prevTab();
    }
    var callback = self.callback;
    var refresh = self.closeRefresh;
    var activate = self.closeActivate;
    self.header.remove();
    self.panel.remove();
    delete self.tabs.hashtable[self.id];
    // if (self.tabs.panelContainer.attr('id').indexOf('cleverTabsPanelContainer') === 0) {
    //     var height = self.tabs.wrapper.height() - self.tabs.element.height() - 30;
    //     self.tabs.panelContainer.css('height', Math.floor(height / self.tabs.wrapper.height() * 100) + '%');
    // }
    var refreshTab = self.tabs.getTabByUrl(refresh);
    if (refreshTab) {
        refreshTab.refresh();
    }
    var activateTab = self.tabs.getTabByUrl(activate);
    if (activateTab) {
        activateTab.activate();
    } else {
        if (nextTab) {
            nextTab.activate();
        }
    }
    callback();
}

IframeTab.prototype.refresh = function () {
    var self = this;
    if (self.url.indexOf('clever_tabs_time_stamp=') > 0) {
        self.url = self.url.substring(0, self.url.indexOf('clever_tabs_time_stamp=') - 1);
    }
    var newUrl = self.url.concat(self.url.indexOf('?') < 0 ? '?' : '&').concat('clever_tabs_time_stamp=').concat(new Date().getTime());
    self.panel.find(' > iframe:first').attr('src', newUrl);
}

IframeTab.prototype.setDisable = function (disable) {
    var self = this;
    if (disable) {
        self.header.addClass('ui-state-disabled');
        var overlay = $('<div class="ui-widget-overlay"></div>');
        self.panel.append(overlay);
        this.setLock(true);
    } else {
        self.header.removeClass('ui-state-disabled');
        var overlay = self.panel.find('div.ui-widget-overlay:first');
        overlay.remove();
        if (self.tabs.lockOnlyOne && self.tabs.element.find('>li').size() == 1) {
            return;
        }
        this.setLock();
    }
}

IframeTab.prototype.setLock = function (lock, changeOrgLock) {
    var self = this;
    var changeOrgLock = changeOrgLock == undefined || changeOrgLock;
    if (changeOrgLock) {
        self.tabs.hashtable[self.id].orgLock = lock;
    }
    if (self.lock == lock) {
        return;
    }
    if (!lock && self.tabs.lockOnlyOne && self.tabs.element.find('>li').size() == 1) {
        return;
    }
    if (!lock) {
        var btnLock = this.header.find('span.ui-icon-locked');
        if (btnLock.size() > 0) {
            btnLock.remove();
        }
        var btnClose = $('<a href="javascript:void(0)" class="ui-corner-all" title="Close" style="position: absolute; cursor: pointer; padding: 0px; top: 1px; right: 1px"><span class="ui-icon ui-icon-close"></span></a>');
        this.header.append(btnClose);
        btnClose.bind('mouseover', function () {
            $(this).addClass('ui-state-active');
        });
        btnClose.bind('mouseout', function () {
            $(this).removeClass('ui-state-active');
        });
        btnClose.bind('click', function () {
            new IframeTab(self.tabs, self.id).kill();
        });
    } else {
        var btnClose = this.header.find('span.ui-icon-close').parent('a:first');
        if (btnClose.size() > 0) {
            btnClose.remove();
        }
        this.header.append($('<span class="ui-icon ui-icon-locked"></span>'));
    }
}

IframeTab.getUniqueByHeaderId = function (id) {
    return id.replace('cleverTabHeaderItem-', '');
}

IframeTab.getUniqueByPanelId = function (id) {
    return id.replace('cleverTabPanelItem-', '');
}

IframeTab.getFullHeaderId = function (uid) {
    return 'cleverTabHeaderItem-'.concat(uid);
}

IframeTab.getFullPanelId = function (uid) {
    return 'cleverTabPanelItem-'.concat(uid);
}
