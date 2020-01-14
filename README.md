# bare-top-page

1. We have to create our HTML file. 
2. Inside our `<body>` we first make our header.

````
<div id="header">
        <div class="container-wrapper">
            <div class="header-link">
                <span class="siteName">SITENAME</span>
                <ul class="menu-links">
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">FEATURE</a></li>
                    <li><a href="#">ACCESS</a></li>
                    <li><a href="#">NEWS</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
                <button class="btn-menu" style="background: url(img/icons/icon-menu2.png);"></button>
            </div>
        </div>
        <div class="header-link main-menu-mobile">
            <ul class="menu-links2">
                <li><a href="#">HOME</a></li>
                <li><a href="#">FEATURE</a></li>
                <li><a href="#">ACCESS</a></li>
                <li><a href="#">NEWS</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
        </div>
    </div>
 ````
 
 *Inside the header is the logo "Sitename" and header links.*
 We need to position these to their proper form.
 
 CSS
 
 ````
 /*For the site name*/
 #header {
    background: #333333;
}

#header .header-link {
    height: 74px;
    width: 100%;
    color: #ffffff;
}

#header .header-link .siteName {
    float: left;
    font: 20px/74px "Roboto";
    color: #fff;
}
````

````
/*For the menu links*/
#header .header-link .menu-links {
    float: right;
    list-style: none;
}

#header .header-link .menu-links li {
    display: inline-block;
    margin-right: 25px;
    line-height: 41px;
}

#header .header-link .menu-links li:last-child {
    margin-right: 0;
}

#header .header-link .menu-links li a {
    text-decoration: none;
    color: #fff;
    font: 18px "Roboto";
}
````

4. Next, we have to create our slider below the header.
We must import first our jquery since we will be using slick slider.

````
