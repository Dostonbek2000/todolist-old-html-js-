

var arr = ['Dostonbek', 'Jamshidbek', 'Fayzullojon'];
var id = -2;
var show = false


document.getElementById('main').style.display = 'none'
document.getElementById('btn').textContent = 'Add';
document.getElementById('btn4').textContent = '+';

function Show() {
    if (show === true) {
        document.getElementById('main').style.display = 'none'
        document.getElementById('btn4').textContent = '+';
        show = false
    } else if (show === false) {
        document.getElementById('main').style.display = 'flex'
        document.getElementById('btn4').textContent = '-';
        show = true
    }
}

function add() {

    if (document.getElementById('inp').value == '') {
        alert('Inputni toldiring')
    } else {
        if (id != -2) {
            arr[id] = document.getElementById('inp').value;
            id = - 2;
            document.getElementById('btn').textContent = 'Add';
            document.getElementById('inp').value = ''
        } else {
            var text = document.getElementById('inp').value;
            arr.push(text)
            document.getElementById('inp').value = ''
        }
        initList()
    }
}
function initList() {
    var table = '';
    for (let i = 0; i < arr.length; i++) {
        table += `<p class='row'><span class='word'>${arr[i]}</span> <span><button style='margin:10px' id='btn2' 
        onclick='del(${i})'>Delete</button><button id='btn3' onclick='update(${i})'>Update</button></span></p>`
    }
    document.getElementById('list').innerHTML = table;
}
function del(index) {
    arr.splice(index, 1)
    initList()
}

function update(index) {
    document.getElementById('main').style.display = 'flex'
    document.getElementById('btn4').textContent = '-';
    show = true
    document.getElementById('inp').value = arr[index];
    document.getElementById('btn').textContent = 'Save';
    id = index
}

initList();

