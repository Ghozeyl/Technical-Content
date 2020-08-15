<div dir="rtl" align="right">


## Strings  ##
<br>

في JavaScript ، يتم تخزين البيانات النصية كـ strings. لا يوجد نوع خاص للحرف الواحد.

التنسيق الداخلي  للـstrings هو UTF-16 ، ولا ليس له علاقة بترميز الصفحة.



 ### الاقتباسات Quotes ### 
 <br>
 
يمكن وضع strings ضمن علامات الاقتباس المفردة (' ')  أو علامات الاقتباس المزدوجة  (" ") أو backticks (``)  كما في المثال أدناه:


<div dir="ltr" align="left">

```js
let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;
```
</div>

علامات الاقتباس المفردة والمزدوجة هي تؤدي نفس العمل. ولكن  backticks تسمح لك بتضمين أي كود برمجي في string ، عن طريق كتابة الكود البرمجي بداخل `  {…}$` كما موضح أدناه  :


<div dir="ltr" align="left">

```js
function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.
```
</div>


ميزة أخرى لاستخدام backticks هي أنها تسمح للـ string أن تمتد إلى عدة أسطر كما موضح أدناه:

<div dir="ltr" align="left">

```js
let guestList = `Guests:
 * Tala
 * Sara
 * Maha
`;

alert(guestList); // a list of guests, multiple lines
```
</div>

وهذه ميزة فقط للـ backticks دون علامات الاقتباس المفردة أو المزدوجة، فإذا استخدامها  وحاولت استخدام أسطر متعددة ، فسيكون ذلك خطأ error، لنجرب ذلك  :

<div dir="ltr" align="left">

```js
let guestList = "Guests: // Error: Unexpected token ILLEGAL
 * Tala";
```
</div>


علامات الاقتباس المفردة والمزدوجة تم انشائها في وقت إنشاء اللغة قديماً، ولم يتم الأخذ في الاعتبار الحاجة إلى  string في أسطر متعددة، وظهرت backticks بعد ذلك بكثير وبالتالي فهي أكثر تنوعًا من علامات الاقتباس المفردة والمزدوجة.
<br>

وتسمح backticks أيضًا بتحديد “template function”  قبل backtick الأولى. الصيغة كما موضح أدناه:
<div dir="ltr" align="left">

```js
func`string`
```
</div>
حيث أنه يتم استدعاء func تلقائيًا ، وتتلقى string و expressions المضمنة ويمكنها معالجتها. وهذا ما يسمى "tagged templates". تسهل هذه الميزة تنفيذ النماذج المخصصة ، ولكنها نادرًا ما تستخدم. 

 ### الأحرف الخاصة Special characters ### 
 <br>
 
من الممكن إنشاء strings متعددة الأسطر بعلامات اقتباس مفردة ومزدوجة باستخدام ما يسمى "newline character" ، يكتب كـ `n\` ، والذي يشير إلى النزول لسطر جديد كما موضح بالمثال أدناه: 

<div dir="ltr" align="left">

```js
let guestList = "Guests:\n * Tala\n * Sara\n * Maha";
alert(guestList); // a multiline list of guests
```
</div>

فيمكنك كتابة سطران متساويان لكنهما مكتوبان بشكل مختلف كما في المثال أدناه:

<div dir="ltr" align="left">

```js
let str1 = "Hello\nWorld"; // two lines using a "newline symbol"

// two lines using a normal newline and backticks
let str2 = `Hello
World`;

alert(str1 == str2); // true
```
</div>
توجد أحرف "خاصة" أخرى لكنها أقل شيوعًا للتعرف عليها أنظر للجدول أدناه.





<table style="width:100%">
     <tr>
    <th>الحرف  </th>
    <th>الوصف  </th>
  </tr>
  <tr>
    <td>n\</td>
    <td> سطر جديد </td>
 </tr>
   <tr>
    <td>r\</td>
    <td>إرجاع: ولكنه لا يُستخدم بمفرده. وتستخدم ملفات Windows النصية مجموعة من حرفين خاصة وهي  r\n\   لتمثيل النزول لسطر جديد.</td>

  </tr>
    <tr>
    <td>'\,"\</td>
    <td>الاقتباس </td>
 </tr>
   <tr>
    <td>\\</td>
    <td>شرطة مائلة للخلف Backslash</td>

  </tr>
  <tr>
    <td>t\</td>
    <td>Tab</td>
 </tr>
   <tr>
    <td>b\,f\,v\</td>
    <td>Backspace ، Form Feed ، Vertical Tab - يتم الاحتفاظ بها من أجل التوافق ، ولايتم  استخدامها في الوقت الحاضر.</td>

  </tr>
    <tr>
    <td>xXX\</td>
    <td> حرف Unicode مع hexadecimal unicode ، مثالx7A\  هو نفسz. </td>
 </tr>
  <tr>
    <td>uXXXX\</td>
    <td> حرف Unicode مع hexadecimal unicode  في ترميز UTF-16 ، مثال u00A9\  - هو رمز لرمز حقوق النشر ©. يجب أن يكون بالضبط 4 أرقام من hexadecimal.</td>
 </tr>
   <tr>
    <td>{u{XXXXXX\</td>
    <td>حرف Unicode مع ترميز UTF-32. بعض الأحرف النادرة يتم ترميزها برمزين Unicode يعني بأربعة بايت. وبهذه الطريقة يمكننا إدخال رموز طويلة.</td>

  </tr>
</table>

أمثلة لاستعمال unicode:

<div dir="ltr" align="left">

```js
alert( "\u00A9" ); // ©
alert( "\u{20331}" ); // 佫, a rare Chinese hieroglyph (long unicode)
alert( "\u{1F60D}" ); // 😍, a smiling face symbol (another long unicode)
```
</div>

💡 نلاحظ أن جميع الأحرف الخاصة تبدأ بالشرطة المائلة للخلف \. وتسمى أيضًا "escape character".

وتستخدم أيضًا إذا أردت إدخال علامةاقتباس في string،كما في المثال أدناه:

<div dir="ltr" align="left">

```js
alert( 'I\'m the Walrus!' ); // I'm the Walrus!
```
</div>

فيجب عليك أن تكتب علامة الاقتباس بشرطة مائلة للخلف إذا كنت تريدها في string، وإلا فإنها تشير إلى نهاية string.
ذلك فقط بالنسبة للرمز الذي استخدمته لكتابة string. فبالتالي يمكنك التبديل إلى علامات الاقتباس المزدوجة أوbackticks بدلاً من ذلك كما موضح أدناه:

<div dir="ltr" align="left">

```js
alert( `I'm the Walrus!` ); // I'm the Walrus!
```
</div>

أن الشرطة المائلة للخلف \  توفر القراءة الصحيحة للـ string في JavaScript ، ثم تختفي.  ولا تخزن مع string في الذاكرة كما موضح في الأمثلة أعلاه.

ولكن ماذا لو اردت إلى إظهار شرطة مائلة للخلف داخل string؟

الحل هو مضاعفتها كما في المثال أدناه:


<div dir="ltr" align="left">

```js
alert( `The backslash: \\` ); // The backslash: \
```
</div>



 ### طول String ### 
 
 <br>
 الخاصية length هي توفر لك طول String كما موضح في المثال أدناه:

<div dir="ltr" align="left">

```js
alert( `My\n`.length ); // 3
```
</div>

💡 لاحظ أن n\ حرف خاص واحد ، وبالتالي فإن الطول هو 3.

💡الطول هو خاصية

قد يخطئ الأشخاص أحيانًا الذين يتعاملون مع بعض اللغات الأخرى لطريقة استدعاء الخاصية، فتتم كتابتها كـ`()str.length ` بدلاً من `str.length` . وهذا لا يعمل؛ لإن `str.length` هي خاصية وليست دالة. فليس هناك حاجة لإضافة أقواس بعدها.



 ### الوصول إلى الأحرف ### 
 
 <br>

للحصول على حرف في موقع معين ، استخدم الأقواس المربعة [الموقع] أو استدع الطريقة (الموقع)str.charAt. ويكون الحرف الأول في الموقع صفر وهكذا لباقي الأحرف، وفي المثال أدناه تم الوصول للحرف الأول والحرف الأخير:


<div dir="ltr" align="left">

```js
let str = `Hello`;

// the first character
alert( str[0] ); // H
alert( str.charAt(0) ); // H

// the last character
alert( str[str.length - 1] ); // o
```
</div>

الأقواس المربعة هي طريقة حديثة للوصول إلى الحرف ، بينما تواجد charAt لأسباب تاريخية.
والفرق الوحيد بينهما هو أنه إذا لم يتم العثور على أي حرف ، فإن [] تقوم بإرجاع `undefined `  ، أما charAt  تقوم بإرجاع string فارغة،  كما هو موضح في المثال أدناه:


<div dir="ltr" align="left">

```js
let str = `Hello`;

alert( str[1000] ); // undefined
alert( str.charAt(1000) ); // '' (an empty string)
```
</div>

ويمكنك المرور على الأحرف بـ  ` for..of ` كما في المثال أدناه :


<div dir="ltr" align="left">

```js
for (let char of "Hello") {
  alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}
```
</div>


 ### Strings غير قابلة للتغيير ### 
 
 <br>
 لا يمكن تغيير Strings في JavaScript. لإنه من المستحيل تغيير الحرف.
لنجرب معاً لاثبات أنه لا يعمل:

 
 <div dir="ltr" align="left">

```js
let str = 'Hi';

str[0] = 'h'; // error
alert( str[0] ); // doesn't work
```
</div>

ماذا لو اردت تغيير حرف ! الحل هو إنشاء string جديدة بالكامل وإسنادها إلى str بدلاً من string القديمة.كما في المثال أدناه:

<div dir="ltr" align="left">

```js
let str = 'Hi';

str = 'h' + str[1]; // replace the string

alert( str ); // hi
```
</div>

 ### Changing the case تغير الحرف من كبير إلى صغير والعكس ### 
 
 <br>
 
 هناك methods وهي `toLowerCase()` و `toUpperCase() ` تسمح لك بتغير الحرف من كبير إلى صغير والعكس، كما في المثال أدناه:
 
 <div dir="ltr" align="left">

```js
alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface
```
</div>

ماذا لو أردت حرف واحد صغير،الطريقة موضحة في المثال أدناه:

<div dir="ltr" align="left">

```js
alert( 'Interface'[0].toLowerCase() ); // 'i'
```
</div>

<br>
*  <br>
*  <br>
*  <br>
💡
على سبيل المثال:

<div dir="ltr" align="left">

```js

```
</div>

</div>
