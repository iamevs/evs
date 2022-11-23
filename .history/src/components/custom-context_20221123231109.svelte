<div id="contextMenu" class="context-menu">
    <ul>
        <li><a href="/">Element-1</a></li>
        <li><a href="/">Element-1</a></li>
    </ul>
</div>

<style>
    .context-menu {
        display: none;
        position: absolute;
        text-align: center;
        /* background: #1212247d; */
        color: white;
        display: flex;
        justify-content:flex-start;
        /* align-items: center; */
        gap: 20px;
        border-radius: 10px;
        backdrop-filter: blur(5px);
        background-color:#2125295c;
        box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
        backdrop-filter: blur(5px);
        padding: 20px;
    }

    .context-menu ul {
        padding: 0px;
        margin: 0px;
        min-width: 150px;
        list-style: none;
    }

    .context-menu ul li {
        padding-bottom: 7px;
        padding-top: 7px;
        display: flex;
        justify-content: flex-start;
        padding-left:10px;
        /* border: 1px solid black; */
    }

    .context-menu ul li a {
        text-decoration: none;
        color: #fff;
    }

    .context-menu ul li:hover {
        transform: scale(1.1);
    }
</style>
