import React from "react";

const Header = () => {
    return (
        <h1>Hello! It's React PODROBNO</h1>
    )
}

const HeaderWithMemo = React.memo(Header);

export default HeaderWithMemo;