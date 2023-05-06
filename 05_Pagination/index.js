

// 创建DOM结构
function creEle(nodeName, className, text){
    const ele = document.createElement(nodeName);
    ele.className = className;
    ele.innerHTML = text;

    return ele;
}

function setCss(ele, styles){
    // for(let key in styles){
    //     ele.styles[key] = styles[key]
    // }
    ele.classList.toggle(styles);

    return ele;
}

class Pagination{
    constructor(ele, options = {}){
        this.ele = document.querySelector(ele);

        this.default = {
            current: options.current || 1,
            total: options.total || 90,
            totalPage: 5,
            pageSize: options.pageSize || 10,
            first: options.first || '首页',
            prev: options.prev || 'Prev',
            next: options.next || 'Next',
            last: options.last || '尾页',
            change: options.change || (() => {}),
        }

        this.init();
    }

    init(){
        this.default.totalPage = Math.ceil(this.default.total / this.default.pageSize);

        console.log(Math.ceil(this.default.total / this.default.pageSize))

        this.renderHtml();
        this.bindEvent();
    }

    // 渲染DOM结构
    renderHtml(){
        // 解构赋值
        const {first, prev, next, last} = this.default;

        const frag = document.createDocumentFragment();

        // 上一页
        frag.appendChild(creEle('div', 'prev', prev));
        // 页数的容器
        const list = creEle('ul', 'pages', '');
        // list.appendChild(this.creItem());
        list.appendChild(this.creItem());
        frag.appendChild(list);
        // 下一页
        frag.appendChild(creEle('div', 'next', next));


        // 最后 放到 this.ele
        this.ele.innerHTML = '';
        this.ele.appendChild(frag);

        this.default.change();

    }

    // 创建page标签页的方法
    creItem(){
        const { current, totalPage } = this.default;

        const frag = document.createDocumentFragment();
        
        // 当总页数小于或者等于5的时候，全部渲染
        if(totalPage <= 5){
            for(let i = 1; i<= totalPage; i++){
                const p = creEle('li', 'page', i);
                // 通过dataset来定义属性index的值
                p.dataset.index = i;
                if(i === current){
                    setCss(p, 'active');
                }
                frag.appendChild(p);
            }
            return frag;
        }

        const point = document.createElement('li');
        point.innerHTML = `...`;
        setCss(point, 'dot');
        
        // 当总页数大于5
        // 当current < 4, 1 2 3 4 .. 100
        if(current < 4){
            for(let i = 1; i<= 4; i++){
                const p = creEle('li', 'page', i);
                p.dataset.index = i;
                if(i === current){
                    setCss(p, 'active');
                }
                frag.appendChild(p);
            }

            
            frag.appendChild(point.cloneNode(true));

            for(let i = totalPage; i<=totalPage;i++){
                const p = creEle('li', 'page', i);
                p.dataset.index = i;
                frag.appendChild(p);
            }

            return frag;
            
        }

        // 当current = 4, 1 2 3 4 5 .. 100
        if(current === 4){
            for(let i = 1; i<= 5; i++){
                const p = creEle('li', 'page', i);
                p.dataset.index = i;
                if(i === current){
                    setCss(p, 'active');
                }
                frag.appendChild(p);
            }

            frag.appendChild(point.cloneNode(true));

            for(let i = totalPage; i<=totalPage; i++){
                const p = creEle('li', 'page', i);
                p.dataset.index = i;
                frag.appendChild(p);
            }

            return frag;
        }


        // 当current > 4, 1 .. 4 5 6 .. 100
        if(current > 4 && current < totalPage - 3){
            for(let i = 1; i< 2; i++){
                const p = creEle('li', 'page', i);
                p.dataset.index = i;
                frag.appendChild(p);
            }

            frag.appendChild(point.cloneNode(true));

            // 中间放3个
            for(let i = current -1; i < current+2; i++){
                const p = creEle('li', 'page', i);
                p.dataset.index = i;
                if(i === current){
                    setCss(p, 'active');
                }
                frag.appendChild(p);
            }

            frag.appendChild(point.cloneNode(true));

            // 放最后一个
            for(let i = totalPage; i <= totalPage; i++){
                const p = creEle('li', 'page', i);
                p.dataset.index = i;
                frag.appendChild(p);
            }

            return frag;
        }

        // 当current == 倒数第4个的时候 1.. 102 103 104 105 106 ;current = 103
        if(current === totalPage - 3){
            for(let i = 1; i< 2; i++){
                const p = creEle('li', 'page', i);
                p.dataset.index = i;
                frag.appendChild(p);
            }

            frag.appendChild(point.cloneNode(true));

            for(let i = totalPage - 4; i <= totalPage; i++){
                const p = creEle('li', 'page', i);
                p.dataset.index = i;
                if(i === current){
                    setCss(p, 'active');
                }
                frag.appendChild(p);
            }

            return frag;
        }

        // 当current 大于 倒数第4个的时候 1.. 103 104 105 106 ;current = 104
        if(current > totalPage - 3){
            for(let i = 1; i< 2; i++){
                const p = creEle('li', 'page', i);
                p.dataset.index = i;
                frag.appendChild(p);
            }

            frag.appendChild(point.cloneNode(true));

            for(let i = totalPage - 3; i <= totalPage; i++){
                const p = creEle('li', 'page', i);
                p.dataset.index = i;
                if(i === current){
                    setCss(p, 'active');
                }
                frag.appendChild(p);
            }

            return frag;
        }


    }

    bindEvent(){
        this.ele.addEventListener("click", (e)=>{
            // window.event 兼容IE
            e = e || window.event;
            // e.scrEvent 兼容IE
            const target = e.target || e.scrEvent;

            const { current, totalPage} = this.default;

            if(target.className === 'next' && current < totalPage){
                this.default.current++;
                this.renderHtml();
            }

            if(target.className === 'prev' && current > 1){
                this.default.current --;
                this.renderHtml();
            }

            if(target.className === 'page'){
                const index = target.dataset.index - 0;
                if(index === current) return;
                this.default.current = index;
                this.renderHtml();
            }
        })
    }

}


const p = new Pagination('.pagination', {
    current: 8,
    total: 100,

});


// const generateSlider=(maxPages, currentPage)=>{
//     if(maxPages <=5){
//         for(let i=0;i<maxPages;i++){
//             pageBox.innerHTML += `<li class="page">${i+1}</li>`;
//         }

//         var pages = pageBox.querySelectorAll("li");
//         pages[currentPage-1].classList.toggle("active");
//     }
//     else if(maxPages > 5){
//         for(let j=0; j< 5; j++){
//             pageBox.innerHTML += `<li class="page">${j+1}</li>`;
//         }
//         pageBox.innerHTML += `
//         <li class="page dot">...</li>
//         <li class="page">${maxPages}</li>
//         `
//     }
    
// }

// generateSlider(5, 4);




