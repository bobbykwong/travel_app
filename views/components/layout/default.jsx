var React = require("react");

class DefaultLayout extends React.Component {
    render() {
        // const icon = <img src='/images/logo.svg' className='icon'></img>

        const sideNav = (
                <ul class="nav justify-content-between">
                  <li>
                    <a href='/'>
                        <img src='/images/logo.svg' className='icon'></img>
                    </a>
                  </li>
                  <li>
                    <a href="/logout" className="logout">
                        <img src='/images/logout.svg' className="logout-img"></img>
                        logout
                    </a>
                  </li>
                </ul>
            )

        return(
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
                    <link rel="stylesheet" type="text/css" href="/css/layout.css" />
                    <link rel="stylesheet" type="text/css" href={this.props.css} />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>{this.props.title}</title>
                </head>
                <body>
                    <header>
                        <nav>
                            {sideNav}
                        </nav>
                    </header>
                    <div className='main-body'>
                        {this.props.children}
                    </div>
                </body>
            </html>

        )
    };
}

module.exports = DefaultLayout;