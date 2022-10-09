class BaseSlider {
    duration?: number
}

class Silder extends BaseSlider {
    el: HTMLElement;
    options: BaseSlider;
    container: HTMLElement;
    items: HTMLCollection;
    firstItem: Element;
    timer: undefined | number;
    current: number
    constructor(el: string, options: BaseSlider) {
        super()
        this.options = options || {}
        let $el = document.querySelector(el);
        if (!$el) throw new Error('el is not undefined')
        this.el = $el as HTMLElement
        this.el.style.cssText = this.getwrapperCssText();
        this.duration = options.duration || 2000
        this.container = this.el.children[0] as HTMLElement;
        this.items = this.container.children;
        if (!this.items.length) throw new Error('items element length is not undefined')
        this.firstItem = this.items[0]
        this.container.style.cssText = this.getContainerCssText()
        this.timer = undefined
        this.current = 0
        this.exec()
    }

    private getwrapperCssText() {
        return `
        overflow: hidden;
        position: relative;
        `
    }
    private getContainerCssText() {
        return `
        font-size:0;
        white-space: nowrap;
        transition: all .6s ease-in-out;
        `
    }

    public exec() {
        this.initDots();
        this.animate()
    }

    public animate() {
        let direction = 1;
        this.setDotActiveStatus(this.current)
        this.setDottainerTransform(this.current);
        clearInterval(this.timer)
        this.timer = setInterval(() => {
            if (this.current >= this.items.length - 1) {
                direction = -1
            } else if (this.current == 0) {
                direction = 1;
            }
            this.current += direction;
            this.setDotActiveStatus(this.current)
            // 如果你想满足所有的样式复用，此处给如何声明
            this.setDottainerTransform(this.current);
        }, this.duration)
    }

    private setDottainerTransform(current: number) {
        this.container.style.transform = `translateX(-${current * this.el.offsetWidth}px)`;
    }
    private setDotActiveStatus(index: number) {
        let dots = document.querySelectorAll('.dot') as NodeListOf<Element>
        Array.from(dots).forEach((dot: Element) => (<HTMLElement>dot).style.width = '.8rem');
        (dots[index] as HTMLElement).style.width = '1.2rem'
    }
    initDots() {
        let dots = this.cerateDots()
        this.el.appendChild(dots)
    }

    private cerateDot() {
        let _this = this
        let fragment = document.createDocumentFragment();
        Array.from(this.items).forEach((item, index) => {
            let dot = document.createElement('span')
            dot.className = 'dot'
            dot.style.cssText = `
            display:block;
            width:.8rem;
            height:.8rem;
            background-color: white;
            border-radius: 1rem;
        `
            dot.addEventListener('click', function () {
                console.log(index);
                _this.current = index;
                _this.animate()
            })
            fragment.appendChild(dot)
        })
        return fragment
    }
    private cerateDots() {
        let dots = document.createElement('div');
        dots.style.cssText = `
        display: flex;
        gap: 0 20px;
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%)
        `
        let dot = this.cerateDot()
        dots.appendChild(dot)
        return dots;
    }
    remove() {
        clearInterval(this.timer)
    }
}
export default Silder;