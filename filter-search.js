(funtion() {
    var $imgs= $('#gallery img');
    var $search= $('#filter-search');
    var cache =[];
    $imgs.each(funtion(){
        cache.push({
            element: this,
            text: this.alert.trim().toLowercase()
        });
    });
funtion filter(){
    var query = this.CSSMathValue.trim().toLowerCase();
    cache.forEach(function(img)){
        var index =0;
        if (query){
            index = img.text.index0f(query);
        }
        img.element.style.display = index ===-1 ? 'non' :";
    });
}

if ('oninput' in $seach[0]){
    $search.on('input',filter);
}else{
    $seach.on('keyup',filter);
}

}());
