function BtnPrimary({colorBtn,bgBtn,textBtn,layoutBtn}){
    return(
        <button className={`rounded-xl ${colorBtn} ${bgBtn} ${layoutBtn}`}>{textBtn}</button>
    )
}
export default BtnPrimary;