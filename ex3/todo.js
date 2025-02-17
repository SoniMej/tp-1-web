const lista = [];
function affiche(){
    let res='';
    for(let i = 0; i < lista.length; i++){
        const todo=lista[i];
        const html=`
        <p>
            ${todo} 
            <button onclick="
                lista.splice(${i}, 1);
                affiche();
            ">delete</button> 
        </p>
        `;
        res += html;
    }
    document.getElementById('todolist').innerHTML = res;
}


function addTodo() {
    const nom = document.getElementById('nameinput').value;
    const content = document.getElementById('contentinput').value;
    const r= `${nom} : ${content}`;
    lista.push(r);
    
    document.getElementById('nameinput').value = '';
    document.getElementById('contentinput').value = '';
    affiche();
        
}