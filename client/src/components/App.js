import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import StreamList from "./Streams/StreamList";
import StreamCreate from "./Streams/StreamCreate";
import StreamDelete from "./Streams/StreamDelete";
import StreamShow from "./Streams/StreamShow";
import StreamEdit from "./Streams/StreamEdit";
import Header from "./Header";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit" exact component={StreamEdit} />
                    <Route path="/streams/delete" exact component={StreamDelete} />
                    <Route path="/streams/show" exact component={StreamShow} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;