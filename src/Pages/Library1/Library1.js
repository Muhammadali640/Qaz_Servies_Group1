import React from "react";
import "./Library1.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Library1 = () => {
  return (
    <div>

      <div className="library1">
        <div className="library_top">
          <div className="library_text">
            <h1>Библиотека</h1>
            <h5>База знаний</h5>
          </div>
        </div>

        <div className="library_bot">
          <ul>
            <li>
              <Link to={"/libary"}>
                Применение атомно-абсорбционных спектрометров
              </Link>
            </li>
            <li>
              <Link to={"/libary"}>
                Применение эмиссионных спектрометров с индуктивно-связанной
                плазмой
              </Link>
            </li>
            <li>
              <Link to={"/libary"}>
                Применение масс-спектрометров с индуктивно-связанной плазмой
              </Link>
            </li>
            <li>
              <Link to={"/libary"}>
                Подготовка проб к анализу методами атомной спектрометрии
              </Link>
            </li>
            <li>
              <Link to={"/libary"}>
                Применение ИК-Фурье спектрометров и ИК-микроскопов
              </Link>
            </li>
          </ul>

          <div className="library_acardion">
            <div className="acardion">
              <h1>Введение в ИК-Фурье спектроскопию</h1>
              <div className="acardion_text">
                <p>
                  Эта статья - введение в основные принципы ИК-Фурье
                  спектроскопии. В ней освещены основная теория и принципы
                  метода, а также некоторые практические аспекты его
                  использования. Мы надеямся, что это по может вам лучше понять
                  всю важность и полезность этого мощного современного метода.
                </p>
              </div>
            </div>

            <div className="acardion">
              <h1>Методы пробоподготовки для ИК спектроскопии</h1>
              <div className="acardion-text">
                <p>
                  Определенные методы пробоподготовки эффективны для данного
                  типа образцов. Чтобы получить спектр наилучшего качества для
                  вашего образца, важно знать какие методы пробоподготовки лучше
                  для образ цов этого типа. Получение спектральных данных
                  наилучшего качества делает ваши результаты наиболее
                  достоверными. В статье представлены теоретические и прикладные
                  аспекты таких методов пробоподго товки образцов (для ИК
                  спектроскопии), как метод пропускания, метод нарушенного
                  полного внутреннего отражения (НПВО), метод диффузного
                  отражения, метод истинного зеркального отражения, метод отраже
                  ние-поглощение. Описаны преимущества методов в зависимости от
                  типа исследуемых образцов.
                </p>
                <img src="../images/text-logo.svg" alt="logo" />
              </div>
            </div>

            <div className="acardion">
              <h1>
                Новые возможности идентификации с помощью программного
                обеспечения OMNIC Specta
              </h1>
              <div className="acardion_text">
                <p>
                  Идентификация материалов - это одно из наиболее общих
                  приложений ИК-Фурье спектроскопии. Анализ материалов от
                  пробоподготовки до идентификации с использованием метода НПВО
                  занимает несколько секунд. Однако существуют более сложные
                  аналитические задачи, когда необходимо идентифицировать
                  компоненты в сложной смеси или примеси, работая только с одним
                  образцом. Программное обеспечение OMNIC Specta (Thermo
                  Scientific) является уникальным и инновационным в области
                  анализа смесей. В статье представлен практический опыт
                  использования программного обеспечения OMNIC Specta для
                  расшифровки фармацевтических смесей, анализа примесей при
                  производстве полимеров и анализа га зовых смесей при
                  комбинированном использовании системы - "Термогравиметрический
                  анализатор-Ин фракрасный спектрометр (ТГА-ИКС)".
                </p>
              </div>
            </div>

            <div className="acardion">
              <h1>Kidney stone analysis using a Nicolet FTIR spectrometer</h1>
              <div className="acardion_text">
                <p>
                  The usefulness of FT-IR spectroscopy in the analysis of kidney
                  stones is growing. In this note, spectra of pure components of
                  kidney stones were measured, mixed and a set of spectral
                  libraries were built. A special algorithm, created to
                  calculate the content in the stone of various components, is
                  described. Sample preparation methods and precision of the
                  analysis are discussed, and examples of the use of the Kidney
                  Stone Library&Analysis Kit are given.
                </p>
              </div>
            </div>

            <div className="acardion">
              <h1>Введение в ИК-Фурье спектроскопию</h1>
              <div className="acardion_text">
                <p>
                  Эта статья - введение в основные принципы ИК-Фурье
                  спектроскопии. В ней освещены основная теория и принципы
                  метода, а также некоторые практические аспекты его
                  использования. Мы надеямся, что это по может вам лучше понять
                  всю важность и полезность этого мощного современного метода.
                </p>
              </div>
            </div>

            <div className="acardion">
              <h1>Методы пробоподготовки для ИК спектроскопии</h1>
              <div className="acardion-text">
                <p>
                  Определенные методы пробоподготовки эффективны для данного
                  типа образцов. Чтобы получить спектр наилучшего качества для
                  вашего образца, важно знать какие методы пробоподготовки лучше
                  для образ цов этого типа. Получение спектральных данных
                  наилучшего качества делает ваши результаты наиболее
                  достоверными. В статье представлены теоретические и прикладные
                  аспекты таких методов пробоподго товки образцов (для ИК
                  спектроскопии), как метод пропускания, метод нарушенного
                  полного внутреннего отражения (НПВО), метод диффузного
                  отражения, метод истинного зеркального отражения, метод отраже
                  ние-поглощение. Описаны преимущества методов в зависимости от
                  типа исследуемых образцов.
                </p>
                <img src="../images/text-logo.svg" alt="logo" />
              </div>
            </div>

            <div className="acardion">
              <h1>
                Новые возможности идентификации с помощью программного
                обеспечения OMNIC Specta
              </h1>
              <div className="acardion_text">
                <p>
                  Идентификация материалов - это одно из наиболее общих
                  приложений ИК-Фурье спектроскопии. Анализ материалов от
                  пробоподготовки до идентификации с использованием метода НПВО
                  занимает несколько секунд. Однако существуют более сложные
                  аналитические задачи, когда необходимо идентифицировать
                  компоненты в сложной смеси или примеси, работая только с одним
                  образцом. Программное обеспечение OMNIC Specta (Thermo
                  Scientific) является уникальным и инновационным в области
                  анализа смесей. В статье представлен практический опыт
                  использования программного обеспечения OMNIC Specta для
                  расшифровки фармацевтических смесей, анализа примесей при
                  производстве полимеров и анализа га зовых смесей при
                  комбинированном использовании системы - "Термогравиметрический
                  анализатор-Ин фракрасный спектрометр (ТГА-ИКС)".
                </p>
              </div>
            </div>

            <div className="acardion">
              <h1>Kidney stone analysis using a Nicolet FTIR spectrometer</h1>
              <div className="acardion_text">
                <p>
                  The usefulness of FT-IR spectroscopy in the analysis of kidney
                  stones is growing. In this note, spectra of pure components of
                  kidney stones were measured, mixed and a set of spectral
                  libraries were built. A special algorithm, created to
                  calculate the content in the stone of various components, is
                  described. Sample preparation methods and precision of the
                  analysis are discussed, and examples of the use of the Kidney
                  Stone Library&Analysis Kit are given.
                </p>
              </div>
            </div>
          </div>

          <ul>
            <li>
              <Link to={"/libary"}>Применение Фурье-БИК анализаторов</Link>
            </li>
            <li>
              <Link to={"/libary"}>
                Применение Раман-спектрометров (спектрометров комбинационного
                рассеяния) и Раман микроскопии
              </Link>
            </li>
            <li>
              <Link to={"/libary"}>
                Материалы по применению методов термического анализа и реологии
              </Link>
            </li>
            <li>
              <Link to={"/libary"}>
                Материалы по мониторингу загрязнения воздуха
              </Link>
            </li>
            <li>
              <Link to={"/libary"}>
                Контрольно-измерительное оборудование в потоке
              </Link>
            </li>
            <li>
              <Link to={"/libary"}>
                Специализированные отраслевые материалы
              </Link>
            </li>
            <li>
              <Link to={"/libary"}>
                Брошюра "Аналитические приборы и оборудование INTERTECH
                Corporation"
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer  */}
      <Footer />
    </div>
  );
};

export default Library1;
