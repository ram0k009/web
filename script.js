if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
} else {
    init()
}

function init() {
    const data = {
        name: 'Каталог товаров',
        hasChildren: true,
        items: [
            {
                name: 'Мойки',
                hasChildren: true,
                items: [
                    {
                        name: 'Ulgran',
                        hasChildren: true,
                        items: [
                            { name: 'Smt', hasChildren: false, items: [] },
                            { name: 'Smt', hasChildren: false, items: [] }
                        ]
                    },
                    { name: 'Vigro Mramor', hasChildren: false, items: [] },
                    {
                        name: 'Handmade',
                        hasChildren: true,
                        items: [
                            { name: 'Smt', hasChildren: false, items: [] },
                            { name: 'Smt', hasChildren: false, items: [] },
                            { name: 'Vigro Glass', hasChildren: false, items: [] }
                        ]
                    }
                ]
            },
            {
                name: 'Фильтры',
                hasChildren: true,
                items: [
                    {
                        name: 'Ulgran',
                        hasChildren: true,
                        items: [
                            { name: 'Smt', hasChildren: false, items: [] },
                            { name: 'Smt', hasChildren: false, items: [] }
                        ]
                    },
                    { name: 'Vigro Mramor', hasChildren: false, items: [] }
                ]
            }
        ]
    }

    const items = new ListItems(document.getElementById('list-items'), data)

    items.render()
    items.init()

    function ListItems(el, data) {
        this.el = el;
        this.data = data;

        this.init = function () {
            this.el.addEventListener('click', (event) => {
                const arrow = event.target.closest('[data-open]');
                
                if (arrow) {
                    const parent = arrow.closest('[data-parent]');
                    this.toggleItems(parent);
                }
            });
        }

        this.render = function () {
            this.el.insertAdjacentHTML('beforeend', this.renderParent(this.data))
        }

        this.renderParent = function (data) {
            let html = '';

            for (let i = 0; i < data.items.length; i++) {
                const item = data.items[i];
                
                if (item.hasChildren) {
                    html += this.renderParent(item); // Вызываем эту же функцию
                } else {
                    html += this.renderChildren(item); // Конечный элемент
                }
            }

            return `
                <div class="list-item list-item_open" data-parent>
                    <div class="list-item__inner">
                        <img class="list-item__arrow" src="img/chevron-down.png" alt="chevron-down" data-open>
                        <img class="list-item__folder" src="img/folder.png" alt="folder">
                        <span>${data.name}</span>
                    </div>
                    <div class="list-item__items">
                        ${html}
                    </div>
                </div>
            `;
        }

        this.renderChildren = function (data) {
            return `
                <div class="list-item">
                    <div class="list-item__inner">
                        <img class="list-item__folder" src="img/folder.png" alt="folder">
                        <span>${data.name}</span>
                    </div>
                </div>
            `;
        }

        this.toggleItems = function (parent) {
            parent.classList.toggle('list-item_open')
        }
    }
}