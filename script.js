const comment = document.getElementById("comment")
const userName = document.getElementById("name")
const userRole = document.getElementById("role")
const nextBtn = document.getElementById("nextBtn")
const prevBtn = document.getElementById("prevBtn")
const userImg = document.getElementById("userImg")


const updateState = () => {
    if(userName.textContent == "Tanya Sinclair"){
        userName.textContent = "John Tarkpor"
        comment.textContent = `“ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”`
        userRole.textContent = "Junior Front-end Developer"
        userImg.src = "./images/image-john.jpg"
    }else{
        userName.textContent = "Tanya Sinclair"
        comment.textContent = `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`
        userRole.textContent = "UX Engineer"
        userImg.src = "./images/image-tanya.jpg"
    }
}

nextBtn.addEventListener("click", updateState)
prevBtn.addEventListener("click", updateState)
