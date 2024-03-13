function marks(points){
    let ret
    if(points >= 70){
        ret = 'yes'
    }

    else{
        ret = 'no'
    } 
       
    return  ret
}

function grade(score){
    let ans
    if(score >=0 && score <=100)
    
    if(score >= 80){
        ans = 'yeah'
    }
    else if(score >= 60){
        ans = 'yes'
    }
    else if(score >= 40){
        ans = 'nah'
    }
    else if(score >= 20){
        ans = 'no'
    }
    else{
        ans = 'invalid'
    }
    else(ans = 'invalid score\'s')
    return ans 
}