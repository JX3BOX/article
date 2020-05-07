export default function(){
    //折叠文本区
    $('.e-summary').on('click',function (){
        $(this).next('.e-details').slideToggle()
        $(this).toggleClass('on')
    });
}