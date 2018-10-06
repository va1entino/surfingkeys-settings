//path:https://raw.githubusercontent.com/va1entino/surfingkeys-settings/master/settings.js
// Navigation
map('<Ctrl-a>', '0'); //行首
map('E', 'gg'); //页首
map('D', 'G'); //页尾
map('D', 'G');
map('D', 'G');
map('D', 'G');
map('D', 'G');
map('D', 'G');

// Tabs
map('h', 'E'); //切换左标签
map('l', 'R'); //切换右标签
map('w', 'x'); //关闭当前标签
map('q', 'X'); //恢复刚刚关闭的标签
map('q', 'X');
map('q', 'X');
map('q', 'X');
map('q', 'X');

// History
map('<Alt-h>', 'S');
unmap('S');
map('<Alt-l>', 'D');
unmap('D');

// Reload
map('R', 'r');
unmap('r');


// visual mode navigation
vmap('<Ctrl-e>', '$');
vmap('<Ctrl-a>', '0');
vmap('<Alt-f>', 'w');
vmap('<Alt-b>', 'b');
vmap('<Alt->>', 'G');
vmap('<Alt-<>', 'gg');
vmap('<Ctrl-l>', 'zz');

settings.smoothScroll = true;
settings.omnibarMaxResults = 15;
settings.focusFirstCandidate = true;
settings.scrollStepSize	= 140;


// Search settings
addSearchAliasX('D', 'ddgH', 'https://duckduckgo.com/html/?q=', 's', 'https://duckduckgo.com/ac/?q=', function(response) {
    var res = JSON.parse(response.text);
    return res.map(function(r){
        return r.phrase;
    });
});
settings.defaultSearchEngine = 'D';

// Hints settings
Hints.characters = "werasdfgvhjionm";
Hints.scrollKeys = "0jkhlG$";
settings.hintAlign = "left";

(function() {
    /// Add hooks to Hints so that we can modify Hints.characters ad-hoc.
    var orig = {
        create: Hints.create,
        exit: Hints.exit
    };
    var default_characters = null;
    Hints.create = function(_x, _y, attrs) {
        if(attrs !== null && typeof(attrs) === "object" && ("debugitos_characters" in attrs)) {
            default_characters = Hints.characters;
            Hints.characters = attrs["debugitos_characters"];
        }
        orig.create.apply(this, arguments);
    };
    Hints.exit = function() {
        if(default_characters !== null) {
            Hints.characters = default_characters;
            default_characters = null;
        }
        orig.exit.apply(this, arguments);
    };
}());


// set theme
settings.theme = `
.sk_theme {
    font-family: Input Sans Condensed, Charcoal, sans-serif;
    font-size: 10pt;
    background: #24272e;
    color: #abb2bf;
}
.sk_theme tbody {
    color: #fff;
}
.sk_theme input {
    color: #d0d0d0;
}
.sk_theme .url {
    color: #61afef;
}
.sk_theme .annotation {
    color: #56b6c2;
}
.sk_theme .omnibar_highlight {
    color: #528bff;
}
.sk_theme .omnibar_timestamp {
    color: #e5c07b;
}
.sk_theme .omnibar_visitcount {
    color: #98c379;
}
.sk_theme #sk_omnibarSearchResult>ul>li:nth-child(odd) {
    background: #303030;
}
.sk_theme #sk_omnibarSearchResult>ul>li.focused {
    background: #3e4452;
}
#sk_status, #sk_find {
    font-size: 20pt;
}`;
// click `Save` button to make above settings to take effect.
