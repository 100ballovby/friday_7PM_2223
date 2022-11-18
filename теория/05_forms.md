<section class="course-theory__content">
    <div class="js--theory-pane__theory course-theory__content-inner"><h1
            class="course-theory__content-heading course-theory__content-heading--marked">Первая форма</h1>
        <div class="course-theory__content-text"><p>Формы нужны для того, чтобы отправлять данные с&nbsp;веб-страницы на&nbsp;веб-сервер,
            который сможет эти данные обработать: зарегистрировать пользователя, создать сообщение на&nbsp;форуме,
            отправить письмо и&nbsp;так далее. В&nbsp;общем, формы в&nbsp;вебе просто необходимы.</p>
            <p>Чтобы создать форму, нужно использовать парный тег <code>&lt;form&gt;</code>, внутри которого размещаются
                поля формы. У&nbsp;тега <code>&lt;form&gt;</code> есть два важных атрибута:</p>
            <ul>
                <li><p><code>action</code> задаёт адрес, <code>URL</code>, отправки формы;</p></li>
                <li><p><code>method</code> задаёт метод отправки формы.</p></li>
            </ul>
            <p>Пример:</p>
            <pre><code>&lt;form action="https://echo.htmlacademy.ru/courses" method="get"&gt;
  <em>поля формы</em>
&lt;/form&gt;</code></pre>
            <p>Для отправки формы обычно используют методы <code>get</code> или&nbsp;<code>post</code>. Если не&nbsp;указать
                атрибут <code>method</code>, то&nbsp;будет использован <code>get</code>.</p>
            <p>Метод <code>get</code> посылает данные формы в&nbsp;строке запроса, то&nbsp;есть они видны в&nbsp;адресной
                строке браузера и&nbsp;следуют после знака вопроса. Например:</p>
            <pre>https://www.google.com/search?<em>q=htmlacademy</em></pre>
            <p>Метод <code>get</code> лучше использовать в&nbsp;поисковых формах, потому что он&nbsp;позволяет получить
                ссылку на&nbsp;результаты поиска и&nbsp;передать её&nbsp;кому-то.</p>
            <p>Метод <code>post</code> посылает данные в&nbsp;теле HTTP-запроса и&nbsp;используется, когда нужно
                отправить много данных и&nbsp;ссылка на&nbsp;результат обработки этих данных не&nbsp;нужна. Например,
                при редактировании личного профиля.</p></div>
    </div>
</section>

<section class="course-theory__content">
    <div class="js--theory-pane__theory course-theory__content-inner"><h1
            class="course-theory__content-heading course-theory__content-heading--marked">Текстовое поле ввода</h1>
        <div class="course-theory__content-text"><p>Большинство полей форм создаётся с&nbsp;помощью одиночного тега
            <code>&lt;input&gt;</code>. У&nbsp;этого тега два обязательных атрибута:</p>
            <ul>
                <li><p><code>type</code> задаёт тип поля;</p></li>
                <li><p><code>name</code> задаёт имя поля.</p></li>
            </ul>
            <p>Тип поля влияет на&nbsp;то, как оно будет отображаться и&nbsp;вести себя. Самый распространённый тип&nbsp;—
                это <code>text</code>, который обозначает <em>текстовое поле</em>. Он&nbsp;же используется по&nbsp;умолчанию.
                Пример:</p>
            <pre><code>&lt;form action="https://echo.htmlacademy.ru/courses" method="get"&gt;
  &lt;input type="text" name="search"&gt;
&lt;/form&gt;</code></pre>
            <p>Имя поля нужно, чтобы правильно обработать данные на&nbsp;сервере. Обычно, имя поля должно быть
                уникальным в&nbsp;пределах формы, хотя есть исключения. Для задания имени поля используют латинские
                буквы и&nbsp;цифры.</p></div>
    </div>
</section>

<section class="course-theory__content">
    <div class="js--theory-pane__theory course-theory__content-inner"><h1
            class="course-theory__content-heading course-theory__content-heading--marked">Идентификатор и&nbsp;значение
        по&nbsp;умолчанию</h1>
        <div class="course-theory__content-text"><p>Атрибут <code>id</code> поля ввода обозначает <em>идентификатор</em>.
            Он&nbsp;должен быть уникальным не&nbsp;только в&nbsp;пределах формы, но&nbsp;и&nbsp;на&nbsp;всей странице.
        </p>
            <p>Обычно идентификаторы используют для повышения удобства работы с&nbsp;формой, например, создают подписи,
                связанные с&nbsp;мелкими полями. При нажатии на&nbsp;такие подписи активируется связанное поле. И&nbsp;это
                удобно, так как по&nbsp;большой подписи попасть легче, чем по&nbsp;маленькому полю. Также идентификаторы
                используют в&nbsp;JavaScript для работы с&nbsp;полями.</p>
            <p>Идентификатор, в&nbsp;отличие от&nbsp;имени поля, не&nbsp;передаётся на&nbsp;сервер.</p>
            <p>Атрибут <code>value</code> задаёт значение поля ввода по&nbsp;умолчанию. Это тоже повышает удобство.</p>
            <p>Согласитесь, приятно зайти в&nbsp;огромную анкету на&nbsp;каких-нибудь госуслугах, а&nbsp;там ваши
                паспортные данные уже подставлены в&nbsp;нужные поля и&nbsp;заполнять их&nbsp;не&nbsp;надо. И&nbsp;всё
                благодаря тому, что программист добавил к&nbsp;полям атрибут <code>value</code> с&nbsp;нужными данными.
            </p></div>
    </div>
</section>

<section class="course-theory__content">
    <div class="js--theory-pane__theory course-theory__content-inner"><h1
            class="course-theory__content-heading course-theory__content-heading--marked">Подпись для поля ввода</h1>
        <div class="course-theory__content-text"><p>Можно подумать, что сделать подпись к&nbsp;полю очень просто. Пишем
            текст рядом с&nbsp;полем и&nbsp;всё готово:</p>
            <pre>Подпись &lt;input type="text" name="username"&gt;</pre>
            <p>На&nbsp;самом деле этого недостаточно&nbsp;— мы&nbsp;получили просто кусок текста и&nbsp;поле, которые
                расположены рядом друг с&nbsp;другом, но&nbsp;логически никак не&nbsp;связаны.</p>
            <p>Есть специальный тег, который позволяет смело сказать: «Этот кусок текста действительно подпись к&nbsp;этому
                полю!». Это парный тег <code>&lt;label&gt;</code>.</p>
            <p>Он&nbsp;связывает текст и&nbsp;поле ввода логически. А&nbsp;ещё если нажать на&nbsp;текст в&nbsp;такой
                подписи, то&nbsp;курсор переместится в&nbsp;соответствующее поле.</p>
            <p>Создавать подписи к&nbsp;полям с&nbsp;помощью <code>&lt;label&gt;</code>&nbsp;— хороший приём.
                Используйте его.</p>
            <p>Первый способ создать подпись&nbsp;— просто обернуть текст подписи и&nbsp;тег поля в&nbsp;тег <code>&lt;label&gt;</code>,
                вот так:</p>
            <pre><code>&lt;label&gt;
  Подпись &lt;input type="text" name="username"&gt;
&lt;/label&gt;</code></pre>
            <p>Надо отметить, что при оборачивании текста в&nbsp;тег <code>&lt;label&gt;</code> он&nbsp;визуально никак
                не&nbsp;меняется, ведь главная задача подписи&nbsp;— создать логическую связь.</p></div>
    </div>
</section>

<section class="course-theory__content">
    <div class="js--theory-pane__theory course-theory__content-inner"><h1
            class="course-theory__content-heading course-theory__content-heading--marked">Связываем подпись и&nbsp;поле
        по&nbsp;id</h1>
        <div class="course-theory__content-text"><p>Иногда обернуть поле и&nbsp;текст подписи в&nbsp;тег <code>&lt;label&gt;</code>
            нельзя. Например, когда они размещены в&nbsp;разных ячейках таблицы.</p>
            <p>В&nbsp;этом случае можно связать подпись с&nbsp;полем с&nbsp;помощью атрибута <code>id</code>. Алгоритм
                такой:</p>
            <ol>
                <li><p>Добавляем к&nbsp;полю ввода идентификатор с&nbsp;помощью атрибута <code>id</code>.</p></li>
                <li><p>Оборачиваем текст подписи в&nbsp;тег <code>&lt;label&gt;</code>.</p></li>
                <li><p>Добавляем тегу <code>&lt;label&gt;</code> атрибут <code>for</code>.</p></li>
                <li><p>В&nbsp;атрибут <code>for</code> записываем такое&nbsp;же значение, что и&nbsp;в&nbsp;атрибуте
                    <code>id</code> у&nbsp;поля.</p></li>
            </ol>
            <p>Например:</p>
            <pre><code>&lt;label for="<em>user-field-id</em>"&gt;Имя пользователя&lt;/label&gt;
...
<i>много-много других тегов</i>
...
&lt;input id="<em>user-field-id</em>" type="text" name="username"&gt;</code></pre>
        </div>
    </div>
</section>

<section class="course-theory__content">
    <div class="js--theory-pane__theory course-theory__content-inner"><h1
            class="course-theory__content-heading course-theory__content-heading--marked">Добавим ещё одно поле</h1>
        <div class="course-theory__content-text"><p>Пришло время добавить в&nbsp;форму ещё одно поле.</p>
            <p>Сделайте это по&nbsp;всем правилам хорошего тона: помимо имени задайте полю идентификатор, добавьте
                подпись к&nbsp;полю и&nbsp;свяжите&nbsp;их.</p>
            <div class="info info--gray">Мы&nbsp;могли&nbsp;бы связать поле и&nbsp;подпись, просто обернув их&nbsp;в&nbsp;тег
                <code>&lt;label&gt;</code>. Но&nbsp;в&nbsp;этом задании мы&nbsp;тренируем более сложный вариант&nbsp;— с&nbsp;использованием
                <code>id</code> и&nbsp;<code>for</code>.
            </div>
        </div>
    </div>
</section>


<section class="course-theory__content">
    <div class="js--theory-pane__theory course-theory__content-inner"><h1
            class="course-theory__content-heading course-theory__content-heading--marked">Поле для ввода пароля</h1>
        <div class="course-theory__content-text"><p>Мы&nbsp;создаём простую форму входа. Уже есть два поля и&nbsp;связанные
            с&nbsp;ними подписи. Одно из&nbsp;полей предназначено для ввода пароля, но&nbsp;сейчас оно является простым
            текстовым полем.</p>
            <p>Чтобы сделать его настоящим полем для ввода пароля, в&nbsp;котором текст будет отображаться
                «звёздочками», нужно просто изменить значение атрибута <code>type</code> на&nbsp;<code>password</code>.
            </p></div>
    </div>
</section>


<section class="course-theory__content">
    <div class="js--theory-pane__theory course-theory__content-inner"><h1
            class="course-theory__content-heading course-theory__content-heading--marked">Кнопка отправки формы</h1>
        <div class="course-theory__content-text"><p>Форма практически готова. Осталось добавить кнопку для отправки
            формы. Такая кнопка создаётся с&nbsp;помощью тега <code>&lt;input&gt;</code> c&nbsp;типом
            <code>submit</code>.</p>
            <p>Надпись на&nbsp;кнопке можно задать с&nbsp;помощью атрибута <code>value</code>. Для кнопки отправки формы
                задавать имя необязательно. Но&nbsp;если имя задано, то&nbsp;на&nbsp;сервер будут отправляться имя и&nbsp;значение
                кнопки.</p>
            <p>Обычно имя для кнопки отправки задают, когда в&nbsp;форме несколько кнопок, отвечающих за&nbsp;разные
                действия. Браузер отправляет на&nbsp;сервер имя и&nbsp;значение только той из&nbsp;них, на&nbsp;которую
                нажал пользователь. Таким образом, сервер может понять, какую кнопку нажали и&nbsp;что нужно
                сделать.</p></div>
    </div>
</section>

<section class="course-theory__content">
    <div class="js--theory-pane__theory course-theory__content-inner"><h1
            class="course-theory__content-heading course-theory__content-heading--marked">Многострочное поле ввода</h1>
        <div class="course-theory__content-text"><p>Мы&nbsp;научились создавать простейшие формы с&nbsp;текстовыми
            полями и&nbsp;кнопками. А&nbsp;теперь познакомимся с&nbsp;более сложными элементами формы.</p>
            <p>Многострочное текстовое поле создаётся с&nbsp;помощью парного тега <code>&lt;textarea&gt;</code>. У&nbsp;него
                есть атрибуты <code>name</code> и&nbsp;<code>id</code>, которые аналогичны атрибутам текстового поля.
            </p>
            <p>Атрибут <code>rows</code> принимает целочисленное значение и&nbsp;задаёт высоту многострочного поля в&nbsp;строках.
                Атрибут <code>cols</code> задаёт ширину поля в&nbsp;символах. В&nbsp;качестве ширины символа берётся
                некоторая «усреднённая ширина».</p>
            <p>Атрибут <code>value</code> у&nbsp;многострочного поля отсутствует, а&nbsp;значение по&nbsp;умолчанию
                задаётся по-другому. Текст, расположенный между открывающим и&nbsp;закрывающим тегом <code>&lt;textarea&gt;</code>
                и&nbsp;является значением по&nbsp;умолчанию. Вот так:</p>
            <pre>&lt;textarea&gt;Значение по умолчанию&lt;/textarea&gt;</pre>
        </div>
    </div>
</section>

<section class="course-theory__content">
    <div class="js--theory-pane__theory course-theory__content-inner"><h1
            class="course-theory__content-heading course-theory__content-heading--marked">Чекбокс</h1>
        <div class="course-theory__content-text"><p>Чекбокс&nbsp;— это тег <code>&lt;input&gt;</code> с&nbsp;типом
            <code>checkbox</code>.</p>
            <p>Чекбокс работает по&nbsp;принципу «либо&nbsp;да, либо нет». Если чекбокс включён, то&nbsp;браузер
                посылает переменную с&nbsp;именем поля на&nbsp;сервер, а&nbsp;если выключен, то&nbsp;не&nbsp;посылается
                ничего. Таким образом, атрибут <code>value</code> не&nbsp;является обязательным.</p>
            <p>Чтобы сделать чекбокс включённым по&nbsp;умолчанию, нужно добавить к&nbsp;тегу атрибут
                <code>checked</code>. Вот так:</p>
            <pre>&lt;input type="checkbox" checked&gt;</pre>
            <p>Чекбокс не&nbsp;подразумевает выбор одного элемента из&nbsp;нескольких. Поэтому если в&nbsp;одной форме
                есть несколько чекбоксов, то&nbsp;имена у&nbsp;них должны быть <em>разными</em>.</p></div>
    </div>
</section>

<section class="course-theory__content">
    <div class="js--theory-pane__theory course-theory__content-inner"><h1
            class="course-theory__content-heading course-theory__content-heading--marked">Радиокнопка</h1>
        <div class="course-theory__content-text"><p>Радиокнопка&nbsp;— это тег <code>&lt;input&gt;</code> с&nbsp;типом
            <code>radio</code>.</p>
            <p>Обычно радиокнопки размещают группами по&nbsp;несколько штук. Причём у&nbsp;радиокнопок из&nbsp;одной
                группы должно быть <em>одинаковое имя</em> и&nbsp;разные значения, которые задаются c&nbsp;помощью
                <code>value</code>.</p>
            <p>Таким образом, атрибут <code>value</code> является для радиокнопок обязательным. Браузер отправляет на&nbsp;сервер
                значение <code>value</code> выбранной радиокнопки.</p>
            <p>В&nbsp;этом задании мы&nbsp;начнём создавать группу радиокнопок.</p></div>
    </div>
</section>

<section class="course-theory__content">
    <div class="js--theory-pane__theory course-theory__content-inner"><h1
            class="course-theory__content-heading course-theory__content-heading--marked">Группа радиокнопок</h1>
        <div class="course-theory__content-text"><p>Теперь добавим ещё один вариант ответа в&nbsp;нашу группу
            радиокнопок. Для этого нужно добавить ещё один <code>&lt;input&gt;</code> с&nbsp;таким&nbsp;же именем, но&nbsp;другим
            значением <code>value</code>.</p>
            <p>Подобным образом можно создавать группы радиокнопок с&nbsp;любым количеством вариантов.</p>
            <p>Чтобы сделать какой-либо вариант в&nbsp;группе выбранным по&nbsp;умолчанию, нужно добавить к&nbsp;соответствующему
                тегу <code>&lt;input&gt;</code> атрибут <code>checked</code>, как у&nbsp;чекбокса.</p>
            <p>Кстати, имя у&nbsp;радиокнопок одной группы должно быть одинаковым, но&nbsp;идентификаторы всегда должны
                быть уникальными.</p></div>
    </div>
</section>

<section class="course-theory__content">
    <div class="js--theory-pane__theory course-theory__content-inner"><h1
            class="course-theory__content-heading course-theory__content-heading--marked">Раскрывающийся список, или
        «селект»</h1>
        <div class="course-theory__content-text"><p>Раскрывающийся список так&nbsp;же, как и&nbsp;радиокнопки, позволяет
            выбрать один вариант ответа из&nbsp;нескольких.</p>
            <p>Раскрывающийся список создаётся с&nbsp;помощью парного тега <code>&lt;select&gt;</code>, у&nbsp;которого
                есть знакомые атрибуты <code>name</code> и&nbsp;<code>id</code>.</p>
            <p>Варианты ответов задаются с&nbsp;помощью парных тегов <code>&lt;option&gt;</code>, которые должны
                располагаться внутри тега <code>&lt;select&gt;</code>. Например:</p>
            <pre><code>&lt;select name="theme"&gt;
  &lt;option value="light"&gt;Светлая тема&lt;/option&gt;
  &lt;option value="dark"&gt;Тёмная тема&lt;/option&gt;
  ...
&lt;/select&gt;</code></pre>
            <p>В&nbsp;атрибуте <code>value</code> тега <code>&lt;option&gt;</code> задаётся значение варианта ответа, а&nbsp;внутри
                этого тега располагается подпись варианта ответа.</p>
            <p>Если при отправке формы у&nbsp;выбранного варианта задан <code>value</code>, то&nbsp;на&nbsp;сервер
                отправится значение этого атрибута. В&nbsp;противном случае будет отправлен текст подписи.</p></div>
    </div>
</section>

<section class="course-theory__content">
    <div class="js--theory-pane__theory course-theory__content-inner"><h1
            class="course-theory__content-heading course-theory__content-heading--marked">«Мультиселект»</h1>
        <div class="course-theory__content-text"><p>Раскрывающийся список можно превратить в&nbsp;так называемый
            «мультиселект», то&nbsp;есть список, в&nbsp;котором можно выбрать не&nbsp;один, а&nbsp;несколько
            вариантов.</p>
            <p>Чтобы сделать это, нужно добавить к&nbsp;тегу <code>&lt;select&gt;</code> атрибут <code>multiple</code>.
            </p>
            <p>Выбрать несколько вариантов можно, щёлкая по&nbsp;ним с&nbsp;зажатой клавишей <code>Ctrl</code> на&nbsp;Windows
                или&nbsp;<code>Command</code> на&nbsp;MacOS.</p>
            <p>Высоту мультиселекта можно изменять с&nbsp;помощью атрибута <code>size</code> тега
                <code>&lt;select&gt;</code>.</p>
            <p>Чтобы отметить как выбранные по&nbsp;умолчанию одно или несколько значений, нужно к&nbsp;соответствующим
                тегам <code>&lt;option&gt;</code> добавить атрибут <code>selected</code>.</p>
            <p>При отправке данных мультиселекта на&nbsp;сервер с&nbsp;PHP после имени в&nbsp;значении атрибута <code>name</code>
                ставятся символы квадратных скобок <code>[]</code>. Например, <code>&lt;select name="days[]"&gt;</code>.
                Это необязательное требование для имени мультиселекта, а&nbsp;нужно только для корректной обработки
                данных серверными языками программирования.</p></div>
    </div>
</section>

<section class="course-theory__content">
    <div class="js--theory-pane__theory course-theory__content-inner"><h1
            class="course-theory__content-heading course-theory__content-heading--marked">Поле для загрузки файлов</h1>
        <div class="course-theory__content-text"><p>Поле для загрузки файлов&nbsp;— это тег <code>&lt;input&gt;</code> с&nbsp;типом
            <code>file</code>. Для этого поля обязательным атрибутом является имя.</p>
            <p>Чтобы поле заработало и&nbsp;браузер смог передать выбранный файл на&nbsp;сервер, необходимо добавить
                <em>форме</em> атрибут <code>enctype</code> со&nbsp;значением <code>multipart/form-data</code>. Не&nbsp;полю,
                а&nbsp;форме.</p>
            <p>Этот атрибут указывает браузеру, в&nbsp;каком виде пересылать данные. Если вы&nbsp;хотите отправить на&nbsp;сервер
                файл, данные из&nbsp;формы эффективнее всего передавать по&nbsp;частям. За&nbsp;это и&nbsp;отвечает
                значение <code>multipart/form-data</code>.</p>
            <p>Кстати, внешний вид полей с&nbsp;типом <code>file</code> очень сильно отличается в&nbsp;зависимости от&nbsp;операционной
                системы и&nbsp;очень плохо изменяется с&nbsp;помощью стилей.</p></div>
    </div>
</section>

<section class="course-theory__content">
    <div class="js--theory-pane__theory course-theory__content-inner"><h1
            class="course-theory__content-heading course-theory__content-heading--marked">Скрытое поле</h1>
        <div class="course-theory__content-text"><p>И&nbsp;ещё одно невидимое и&nbsp;очень полезное поле. Это скрытое
            поле. Его используют, когда в&nbsp;форме нужно отправить какие-то дополнительные служебные данные, которые
            не&nbsp;вводятся пользователем.</p>
            <p>Например, это могут быть реквизиты заказа или номер пользователя в&nbsp;форме оплаты.</p>
            <p>Скрытое поле&nbsp;— это тег <code>&lt;input&gt;</code> с&nbsp;типом <code>hidden</code>.</p></div>
    </div>
</section>

