let header="<header>\
<div class='container'>\
    <nav class='navbar navbar-expand-lg navbar-light'>\
        <a class='navbar-brand' href='index.html'>\
            <img src='logo.png'>\
        </a>\
        <button class='navbar-toggler' type='button' data-toggle='collapse'\
            data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false'\
            aria-label='Toggle navigation'>\
            <span class='navbar-toggler-icon'></span>\
        </button>\
        <div class='collapse navbar-collapse' id='navbarSupportedContent'>\
            <ul class='navbar-nav mr-auto'>\
                <li class='nav-item active'>\
                    <a class='nav-link' href='index.html'>首頁</a>\
                </li>\
                <!--<li class='nav-item active'>\
                    <a class='nav-link' href='#'>師長的話</a>\
                </li>-->\
                <li class='nav-item dropdown'>\
                    <a class='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button'\
                        data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\
                        專題\
                    </a>\
                    <div class='dropdown-menu' aria-labelledby='navbarDropdown'>\
                        <a class='dropdown-item' href='chm.html'>化學</a>\
                        <a class='dropdown-item' href='bio.html'>生物</a>\
                        <a class='dropdown-item' href='egn.html'>工程</a>\
                        <a class='dropdown-item' href='IT.html'>資訊</a>\
                        <a class='dropdown-item' href='math.html'>數學</a>\
                        <a class='dropdown-item' href='phy.html'>物理</a>\
                    </div>\
                </li>\
                <li class='nav-item dropdown'>\
                    <a class='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button'\
                        data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\
                        影音相關\
                    </a>\
                    <div class='dropdown-menu' aria-labelledby='navbarDropdown'>\
                        <a class='dropdown-item' href='https://www.youtube.com/watch?v=CYHws4geDNA' target='_blank'>預告片-恐怖巨獻</a>\
                        <a class='dropdown-item' href='https://www.youtube.com/watch?v=O1s8OEzlBN0' target='_blank'>預告片-患蛋見真情</a>\
                        <a class='dropdown-item' href='#'>患蛋</a>\
                        <a class='dropdown-item' href='https://www.youtube.com/channel/UCNMCqiRPasl9T1VudKd7KMQ/featured' target='_blank'>線上成發精彩重播</a>\
                    </div>\
                </li>\
                <li class='nav-item active'>\
                    <a class='nav-link' href='photo.html'>活動照片</a>\
                </li>\
            </ul>\
        </div>\
    </nav>\
</div>\
</header>";
document.querySelector('.header').innerHTML=header;