import { useContext } from "react"
import LightDarkMode from "../light-dark-mode"
import RandomColor from "../random-color"
import TicTacToe from "../tic-tac-toe"
import TreeView from "../tree-view"
import menus from "../tree-view/data"
import { FeatureFlagsContext } from "./context"
import TabTest from "../custom-tabs/tab-test"




export default function FeatureFlags(){

    const{loading, enabledFlags} = useContext(FeatureFlagsContext)

    const componentsToRender = [
        {
            key: 'showLightAndDarkMode',
            component: <LightDarkMode/>
        },
        {
            key: 'showTicTacToeBoard',
            component: <TicTacToe/>
        },
        {
            key: 'showRandomColor',
            component: <RandomColor/>
        },
        {
            key: 'showTreeView',
            component: <TreeView menus={menus}/>
        },
        {
            key: 'showTabs',
            component: <TabTest/>
        },
       
    ]

    function checkEnabledFlags(getCurrentKey){
        return enabledFlags[getCurrentKey]
    }

    if (loading) return <h1>Loading Data ! Please Wait</h1>

    return(
        <div>
            <h1>Feature Flag</h1>
            {componentsToRender.map(item=> checkEnabledFlags(item.key)? item.component : null)}
        </div>
    )
}