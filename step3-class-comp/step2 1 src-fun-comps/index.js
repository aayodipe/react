import React from 'react';
import ReactDOM from 'react-dom';

function Header(){
    return <div>
                <h1> Welcome to your life !!! </h1>
            </div>
}
function Footer(){
    return <div>
                <h3> &copy; Copyrights reserved to My Company </h3>
           </div>
}
function Article(){
    return <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia nibh quis neque cursus, et elementum nulla tincidunt. Curabitur dictum fermentum imperdiet. Donec quis consequat orci. Aliquam cursus sollicitudin risus nec tristique. Nam imperdiet sollicitudin viverra. Nulla eget ipsum cursus, auctor neque sit amet, lacinia purus. Donec sapien tellus, rhoncus eu nisi auctor, viverra gravida diam. Donec pharetra quis mi quis vestibulum. Quisque fermentum eros lorem, sit amet facilisis metus interdum ac. Proin molestie, nunc quis pellentesque fringilla, sapien sapien faucibus orci, sit amet semper purus mi eu ante. Sed ornare eros nec diam venenatis ultricies. Pellentesque non lectus nec eros rutrum aliquet. 
            <br/>
            Proin dignissim urna sit amet ligula fringilla ullamcorper. Fusce eget tempus sem, sollicitudin interdum arcu. Aliquam lacinia, nulla non porttitor maximus, dolor lectus bibendum mi, ac elementum est lorem a diam. Fusce eu risus vitae lacus faucibus viverra non vel nisl. Nulla molestie fermentum velit a lacinia. Cras vulputate, felis in fermentum congue, est lorem interdum lectus, nec sagittis metus dui vel dui. Pellentesque sed ornare justo. In eleifend dapibus risus, id ullamcorper orci dictum nec. Suspendisse laoreet, elit eget ullamcorper vulputate, velit purus efficitur nunc, id commodo dolor risus facilisis nibh. In ac velit sit amet lacus dignissim mattis. Nulla facilisi. Praesent convallis commodo metus quis pretium. Sed a elit condimentum, vehicula enim at, ullamcorper tellus. 
           </p>
}
function Main(){
    return <div>
            <Article/>
            <Article/>
           </div>
}
function App(){
    return <div className="container">
            <Header/>
            <Main/>
            <Footer/>
           </div>
}
ReactDOM.render(<App/>, document.getElementById("root"));