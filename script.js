const variants = [
{
name:“Голос SIMS-2”,
description:“Площадка для вопросов, предложений и обратной связи сотрудников. Здесь можно поднять важную тему для обсуждения на полугодовой встрече с руководством.”
},
{
name:“Открытый диалог”,
description:“Пространство для открытого общения сотрудников и руководства.”
},
{
name:“SIMS-2 слушает”,
description:“Канал обратной связи для вопросов, идей и предложений сотрудников.”
},
{
name:“Ваш вопрос — в повестку”,
description:“Помогите сформировать темы для обсуждения на полугодовой встрече.”
},
{
name:“Диалог с руководством”,
description:“Площадка для вопросов и предложений сотрудников.”
}
];

function changeVariant(index){

document.getElementById(“projectName”).innerText =
variants[index].name;

document.getElementById(“projectDescription”).innerText =
variants[index].description;

document.title = variants[index].name;

}
