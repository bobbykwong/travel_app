var React = require("react");

class Login extends React.Component {
  render() {
    const icon = <img src='/images/logo.svg' className='icon'></img>
    const username = this.props.username;
    const tripID = this.props.id;

    const sideNav = (
            <div className="side-nav">
                <p className='side-nav-links'>{username}</p>
                <a href="#" className='side-nav-links'>Following</a><br></br>
                <a href="#" className='side-nav-links'>Favourites</a>
            </div>
                )

    const newTrip = (
                    <a href='/newtrip' className='new-trip-link'>+</a>
                    )

    const dayHeader = (
                    <div className='day-header'>
                        <p className="day-num">DAY {this.props.dayNum}</p>
                    </div>
                    )

    const addActivity = (
                <form className="activity-form">
                    <input type="text" name='title' placeholder='Activity'></input><br></br>
                    <input type='text' name='location' placeholder='Location'></input><br></br>
                    <input type='time' name='time_start'></input><p>Time Start</p>
                    <input type='time' name='time_end'></input><p>Time End</p><br></br>
                    <input type='text' name='notes' placeholder='notes'></input><br></br>
                </form>
                        )

    const addActivityBtn = (
                        <button type='button' class='add-activity-btn'>Add Activity</button>
                        )

    return (
      <html>
        <head>
            <link rel="stylesheet" type="text/css" href="/css/day.css" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body>
            <header>
                <div className='logo'>
                    <a href='/' className='home-btn'>
                    {icon}
                    <h1>TRAVELAPP</h1>
                    </a>
                </div>
                <div className='page-title'>

                </div>
                <div className='new-trip'>
                    {newTrip}
                </div>
            </header>
            <nav>
                {sideNav}
            </nav>
            {dayHeader}
            <div className='days-body'>
                {addActivityBtn}
            </div>
            <script src='/script/day.js'></script>
        </body>
      </html>
    );
  }
}

module.exports = Login;