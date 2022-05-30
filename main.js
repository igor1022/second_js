let hungry = document.querySelector('select[name="hungry"]');
let go_to = document.querySelector('select[name="go to"]');
let fridge = document.querySelector('select[name="fridge"]');
let ate = document.querySelector('select[name="ate"]');

/*const run = () => {
    if (hungry.value === 'yes') {
        console.log("we start thinking about food");
    } else {
        console.log("don't want to eat");
        return;
    }

    if (go_to.value === 'can') {
        console.log("we start moving to the fridge");
    } else {
        console.log("can't get to the fridge");
        return;
    }

    if (fridge.value === 'sausage') {
        console.log("we take sausege");
    } else {
        console.log("not found a sausege");
        return;
    }

    if (ate.value === 'yes') {
        console.log("we start eating");
    } else {
        console.log("put the sausage back");
        return;
    }
}*/

const el1 = document.querySelector('.conteiner');


const run1 = () => {

    el1.innerHTML = '';

    if (hungry.value === 'yes') {
        el1.insertAdjacentHTML('beforeend', 'we start thinking about food');
        el1.insertAdjacentHTML('beforeend', '<br>');
    } else {
        el1.insertAdjacentHTML('beforeend', "don't want to eat");
        el1.insertAdjacentHTML('beforeend', '<br>');
        return;
    }

    if (go_to.value === 'can') {
        el1.insertAdjacentHTML('beforeend', 'we start moving to the fridge');
        el1.insertAdjacentHTML('beforeend', '<br>');
    } else {
        el1.insertAdjacentHTML('beforeend', "can't get to the fridge");
        el1.insertAdjacentHTML('beforeend', '<br>');
        return;
    }

    if (fridge.value === 'sausage') {
        el1.insertAdjacentHTML('beforeend', "we take sausege");
        el1.insertAdjacentHTML('beforeend', '<br>');
    } else {
        el1.insertAdjacentHTML('beforeend', "not found a sausege");
        el1.insertAdjacentHTML('beforeend', '<br>');
        return;
    }

    if (ate.value === 'yes') {
        el1.insertAdjacentHTML('beforeend', "we start eating");
        el1.insertAdjacentHTML('beforeend', '<br>');
    } else {
        el1.insertAdjacentHTML('beforeend', "put the sausage back");
        el1.insertAdjacentHTML('beforeend', '<br>');
        return;
    }

    
}

run1();

hungry.addEventListener('change', run1);
go_to.addEventListener('change', run1);
fridge.addEventListener('change', run1);
ate.addEventListener('change', run1);

    