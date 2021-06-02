import React from 'react'
import { Route, Switch } from "react-router-dom";

import StreamList from "./Streams/StreamList";
import StreamCreate from "./Streams/StreamCreate";
import StreamDelete from "./Streams/StreamDelete";
import StreamShow from "./Streams/StreamShow";
import StreamEdit from "./Streams/StreamEdit";
import Header from "./Header";


function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={StreamList} />
                <Route path="/streams/new" exact component={StreamCreate} />
                <Route path="/streams/edit/:id" exact component={StreamEdit} />
                <Route path="/streams/delete/:id" exact component={StreamDelete} />
                <Route path="/streams/:id" exact component={StreamShow} />
            </Switch>
        </div>

    )
}

export default App;