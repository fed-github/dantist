// // Импортируем изображения в массив
import Opinion from '/src/icons/grid_icons/Opinion.png';
import Profilactic from '/src/icons/grid_icons/Profilactic.png';
import Healing from '/src/icons/grid_icons/Healing.png';
import Parodontology from '/src/icons/grid_icons/Parodontology.png';
import Implant from '/src/icons/grid_icons/Implant.png';
import Kids from '/src/icons/grid_icons/Kids.png';
// import Diagnosis from '/src/icons/grid_icons/Diagnosis.png';
import Light from '/src/icons/grid_icons/Light.png';
import Remove from '/src/icons/grid_icons/Remove.png';

export const serviceData = [
    {
      image: Opinion,
      title: "Экспертное мнение врача",
      description: "Консультация и экспертное мнение врача по состоянию зубов и полости рта.",
      price: 1500, // Цена в долларах
    },
    {
      image: Healing,
      title: "Лечение зубов",
      description: "Лечение различных заболеваний зубов, включая кариес, пульпит и периодонтит.",
      price: 3000,
    },
    {
      image: Remove,
      title: "Удаление зуба",
      description: "Процедура удаления поврежденного или больного зуба с последующим обработкой раны.",
      price: 1000,
    },
    {
      image: Implant,
      title: "Имплантация зубов",
      description: "Хирургическая процедура внедрения имплантата для замены отсутствующего зуба.",
      price: 5000,
    },
    {
      image: Light,
      title: "Осветление",
      description: "Процедура осветления зубов для улучшения их внешнего вида и отбеливания эмали.",
      price: 2500,
    },
    {
      image: Parodontology,
      title: "Пародонтология",
      description: "Диагностика и лечение заболеваний пародонта, таких как пародонтит и гингивит.",
      price: 4000,
    },
    {
      image: Profilactic,
      title: "Профилактика",
      description: "Мероприятия по предотвращению заболеваний полости рта и зубов, включая чистку и профилактические осмотры.",
      price: 1000,
    },
    {
      image: Kids,
      title: "Детская стоматология",
      description: "Услуги по уходу за зубами и полостью рта детей, включая лечение и профилактику.",
      price: 2000,
    }
];
