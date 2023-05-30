function click() {
    document.querySelector('.headline__btn').addEventListener('click', () => {
        document.querySelector('.profile').scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' })
    })
    document.querySelectorAll('.scrollUpBtn > li > button').forEach((e, inx) => {
        e.addEventListener('click', () => {
            // console.log(inx);
            switch (inx) {
                case 0:
                    document.body.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
                    break
                case 1:
                    document.querySelector('.bulidUp').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
                    break
                case 2:
                    document.querySelector('.skillUp').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
                    break
                case 3:
                    document.querySelector('.project').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
                    break
                case 4:
                    document.querySelector('.studyWork').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
                    break
                case 5:
                    document.querySelector('.growing').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
                    break
                default:
                    break
            }
        })
    })
}
export default click
