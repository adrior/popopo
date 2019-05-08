import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import NextButton from "../src/Blocks/NextButton/NextButton";
import Intro from "../src/Blocks/Intro/Intro";
import Answer from "../src/Blocks/Answer/Answer";

storiesOf("NextButton", module)
  .add("Simple", () => (
    <NextButton onClick={action("clicked")}>Next</NextButton>
  ))
  .add("Action", () => (
    <NextButton theme="action" onClick={action("clicked")}>
      Just do it!
    </NextButton>
  ));

storiesOf("Intro", module)
  .add("With Image", () => (
    <Intro
      title="Helvetica Now"
      subtitle="Переиздание шрифта спустя 30 лет"
      descr="Helvetica Now was designed by Max Miedinger, Charles Nix, Monotype Studio, Jan Hendrik Weber and published by Monotype in 2019. Helvetica Now contains 48 styles and family package options. The font is currently #1 in Best Sellers, and #1 in Hot New Fonts. More about this family"
      image="http://www.graphis.com/media/uploads/cfe/entry/8982e5f0-bc90-11e2-adeb-f23c91dffdec/Helvetica_Now_1.jpg"
      action="Вперде!"
    />
  ))
  .add("No Image", () => (
    <Intro
      title="Какого цвета сапоги у Волка из «Ну, погоди!»? А шарик у Винни-Пуха?"
      subtitle="Тест «Медузы» ко Дню российской анимации (на внимательность)"
      descr={[
        "8 апреля в России отмечают ",
        <b>День анимации</b>,
        " В этот день в 1912 году показали первый отечественный мультипликационный фильм «Прекрасная Люканида», его главными героями были черно-белые жуки. За 107 лет все стало гораздо красочнее. «Медуза» предлагает проверить, насколько внимательно вы смотрели самые известные советские и российские цветные мультфильмы."
      ]}
      action="Пройти тест"
    />
  ));

storiesOf("Intro", module)
  .add("With Image", () => (
    <Intro
      title="Helvetica Now"
      subtitle="Переиздание шрифта спустя 30 лет"
      descr="Helvetica Now was designed by Max Miedinger, Charles Nix, Monotype Studio, Jan Hendrik Weber and published by Monotype in 2019. Helvetica Now contains 48 styles and family package options. The font is currently #1 in Best Sellers, and #1 in Hot New Fonts. More about this family"
      image="http://www.graphis.com/media/uploads/cfe/entry/8982e5f0-bc90-11e2-adeb-f23c91dffdec/Helvetica_Now_1.jpg"
      action="Вперде!"
    />
  ))
  .add("No Image", () => (
    <Intro
      title="Какого цвета сапоги у Волка из «Ну, погоди!»? А шарик у Винни-Пуха?"
      subtitle="Тест «Медузы» ко Дню российской анимации (на внимательность)"
      descr={[
        "8 апреля в России отмечают ",
        <b>День анимации</b>,
        " В этот день в 1912 году показали первый отечественный мультипликационный фильм «Прекрасная Люканида», его главными героями были черно-белые жуки. За 107 лет все стало гораздо красочнее. «Медуза» предлагает проверить, насколько внимательно вы смотрели самые известные советские и российские цветные мультфильмы."
      ]}
      action="Пройти тест"
    />
  ));

storiesOf("Answer", module)
  .add("Closed", () => (
    <Answer
      title="Просто ничего не делать"
      descr="Просто ничего неделать может быть не самым лучшим ответом"
      status="wrong"
      state="closed"
      image="http://www.graphis.com/media/uploads/cfe/entry/8982e5f0-bc90-11e2-adeb-f23c91dffdec/Helvetica_Now_1.jpg"
    />
  ))
  .add("Open Wrong", () => (
    <Answer
      title="Просто ничего не делать"
      descr="Просто ничего неделать может быть не самым лучшим ответом"
      status="wrong"
      state="open"
      image="http://www.graphis.com/media/uploads/cfe/entry/8982e5f0-bc90-11e2-adeb-f23c91dffdec/Helvetica_Now_1.jpg"
    />
  ))
  .add("Open Right", () => (
    <Answer
      title="Просто ничего не делать"
      descr="Просто ничего неделать может быть не самым лучшим ответом"
      status="right"
      state="open"
      image="http://www.graphis.com/media/uploads/cfe/entry/8982e5f0-bc90-11e2-adeb-f23c91dffdec/Helvetica_Now_1.jpg"
    />
  ));
