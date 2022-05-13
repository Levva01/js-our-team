//creo l'oggetto membro

let member =  {
    nome: "",
    ruolo: "",
    foto: ""
};


//creo l'array di membri

let membri = [
    {

        member: {
            nome: "Wayne Barnett",
            ruolo: "Founder & CEO",
            foto: "img/wayne-barnett-founder-ceo.jpg"
        }
    
    },

    {
        member: {
            nome: "Angela Caroll",
            ruolo: "Chief Editor",
            foto: "img/angela-caroll-chief-editor.jpg"
        }
    },

    {

        member: {
            nome: "Walter Gordon",
            ruolo: "Office Manager",
            foto: "img/walter-gordon-office-manager.jpg"
        }
    
    },

    {
        member: {
            nome: "Angela Lopez",
            ruolo: "Social Media Manager",
            foto: "img/angela-lopez-social-media-manager.jpg"
        }
    },

    {

        member: {
            nome: "Scott Estrada",
            ruolo: "Developer",
            foto: "img/scott-estrada-developer.jpg"
        }
    
    },

    {
        member: {
            nome: "Barbare Ramos",
            ruolo: "Graphic Designer",
            foto: "img/barbara-ramos-graphic-designer.jpg"
        }
    },
];

const teamContainer = document.querySelector(".team-container");

for(let i = 0; i < membri.length; i++){
    const teamCard = `

    <div class="team-card">
        <div class="card-image">
            <img
                src= "${membri[i].member.foto}"
                alt=""
            />
        </div>
        <div class="card-text">
            <h3>${membri[i].member.nome}</h3>
            <p>${membri[i].member.ruolo}</p>
        </div>
    </div>
    
    `;

    teamContainer.innerHTML += teamCard;
}