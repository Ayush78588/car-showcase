function Hero() {
    return <div id="body">
        <h1 id="prhd">About Problem</h1>
        <p>
            🔍 Problem 1: display: inline does not support gap
            gap only works with display: flex or grid.

            inline elements flow like text and don't recognize gap.

            🔍 Problem 2: text-align: center on li won't center items in a row
            text-align is used to center text inside an element.

            It won't center li elements themselves inside a ul.


        </p>
    </div>
}
export default Hero;