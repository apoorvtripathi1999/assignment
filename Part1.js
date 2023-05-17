const photo = document.querySelector(".image")
const btnblue = document.getElementById("btnblue")
const btnpink = document.getElementById("btnpink")
const btnyellow = document.getElementById("btnyellow")
const background = document.querySelector(".container-main")
const uploadBtn =  document.querySelector(".upload-btn")
const upload = document.querySelector("input")
const logo = document.querySelector(".logo-img")

upload.addEventListener("change", handleUpload)

function handleUpload()
{
    const files = upload.files
    logo.src = URL.createObjectURL(files[0])
    logo.style.opacity = 1
}

function setActiveBtn(btnColor)
{
    if(btnColor === 'blue')
    {
       btnblue.style.border = "5px solid rgb(142, 175, 186)"
       btnpink.style.border = "2px solid rgb(232, 175, 185)"
       btnyellow.style.border = "2px solid rgb(232, 232, 4)"
    }
    if(btnColor === 'pink')
    {
       btnblue.style.border = "2px solid rgb(142, 175, 186)"
       btnpink.style.border = "5px solid rgb(232, 175, 185)"
       btnyellow.style.border = "2px solid rgb(232, 232, 4)"
    }
    if(btnColor === 'yellow')
    {
       btnblue.style.border = "2px solid rgb(142, 175, 186)"
       btnpink.style.border = "2px solid rgb(232, 175, 185)"
       btnyellow.style.border = "5px solid rgb(232, 232, 4)"
    }
}

function setColorOfUpload(col)
{
    uploadBtn.style.backgroundColor= col
}

function handleClick(color)
{
    if(color === 'blue')
    {
       photo.src="./images/Blue umbrella.png"
       background.style.backgroundColor="lightblue"
       setActiveBtn("blue")
       setColorOfUpload("rgb(142, 175, 186)")
    }
    if(color === 'pink')
    {
        photo.src="./images/Pink umbrella.png"
        background.style.backgroundColor="pink"
        setActiveBtn("pink")
        setColorOfUpload("rgb(232, 175, 185)")
    }
    if(color === 'yellow')
    {
        photo.src="./images/Yello umbrella.png"
        background.style.backgroundColor="yellow"
        setActiveBtn("yellow")
        setColorOfUpload("rgb(232, 232, 4)")
    }
}