


const dummyApiRersponse = {
    showLightAndDarkMode : true,
    showTicTacToeBoard : true,
    showRandomColor : true,
    showTreeView : true,
    showTabs : true
}


export default function featureFlagsDataServiceCall(){
    return new Promise((resolve, reject)=>{
        if(dummyApiRersponse) setTimeout(resolve(dummyApiRersponse), 500)
        else reject('Some error occured! Please try again')
    })
}