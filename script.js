
// The if statement below saves the theme color by using localstorage in the console. to access this go to inspect on the browser and chose application and write this if statement. 
let theme = localStorage.getItem('theme')

if(theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}

let colorDots = document.getElementsByClassName('color-dot')

for (var i = 0; colorDots.length > i; i++){
    colorDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('Option clicked:', mode)
        setTheme(mode)
    })
}


// this function grabs the elements from html and changes the color 
function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'styles.css'
    }

    if(mode == 'dark'){
        document.getElementById('theme-style').href = 'dark.css'
    }

    if(mode == 'fun'){
        document.getElementById('theme-style').href = 'fun.css'
    }
    

// writing this will save the color mode to the browser.... basically calling the function. 
localStorage.setItem('theme', mode)


}

