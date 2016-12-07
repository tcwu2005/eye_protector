function onclick() {
    var key = this.id;

    // 根据选项类型反转选项
    var op = option[key];
    if( typeof op == 'object' ) {
        if( op.indexOf(host) > -1 ) {
            option[key].remove(host);
        } else {
            option[key].push(host);
        }
    } else {
        option[key] = !op;
    };
    saveOption();

    // toggle class
    this.classList.toggle('checked');
}

function init() {
    // 读取设置
    readOption(function() {
        var key, value, node;
        for(key in option) {
            value = option[key];
            // object类的设置是域名列表，检查当前域名是否在列表中
            if( typeof value == 'object' ) {
                if( value.indexOf(host) > -1 ) {
                    $(key).classList.add('checked');
                }
            } else {
                // bool
                item = $(key);
                if( item && value ) {
                    item.classList.add('checked');
                }
            }
        }
    });

    var nodes = $$('.option-item');
    nodes.forEach(function(node) {
        node.addEventListener('click', onclick);
    });
}

document.addEventListener('DOMContentLoaded', init);