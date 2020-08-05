<div dir="rtl" align="right">


## ٢.٤ التراجع عن الأشياء ##

### مقدمة عن التراجع عن الأشياء ###

قد ترغب في أي مرحلة بالتراجع عن شيء ما. في هذا القسم سنشرح بعض الأدوات الأساسية للتراجع عن التغييرات التي فعلتها. لابد أن تكون حذراً، لأنه لا يمكنك دائمًا التراجع عن بعض هذه التراجعات. هذه احدى المناطق القليلة في Git التي قد تفقد فيها بعض اعمالك إذا قمت بها بشكل خاطئ.

من أكثر الأماكن الأكثر شيوعاً لاحتياجك للتراجع عن شي هي عندما تعمل commit في وقت مبكر جداً وتكون قد نسيت إضافة بعض الملفات ، أو خبطت في رسالة commit. إذا كنت تريد إعادة commit ، فقم بإجراء التغييرات الإضافية التي نسيتها ، وأعدها ، ثم نفذ commit مرة أخرى باستخدام خيار `amend--`،كما في المثال ادناه:

<div dir="ltr" align="left">

```git
$ git commit --amend
```
</div>

يأخذ هذا الأمر منطقة staging الخاصة بك ويستخدمها لل commit.إذا لم تجرِ أي تغييرات منذ آخر commit لك (على سبيل المثال ، قمت بتشغيل هذا الأمر فورًا بعد أخر commit لك) ، فستبدو التغييرات كما هي تمامًا ، وكل ما ستغيره هو رسالة commit.

ينطلق نفس محرر رسالة commit ، ولكنه يحتوي على رسالة commit السابقة. يمكنك تعديل الرسالة ولكنها سوف تكتب فوق رسالة commit السابقة.

كمثال ، إذا فعلت commit ثم تذكرت أنك نسيت إجراء التغييرات في ملف تريد إضافته إلى هذا commit ، يمكنك القيام بهذا الأمر كما هو موضح ادناه:


<div dir="ltr" align="left">


```git
$ git commit -m 'Initial commit'
$ git add forgotten_file
$ git commit --amend
```
</div>

ينتهي الأمر بتطبيق commit واحد وهو commit الثاني فيحل محل نتائج  commit الأول.




ملاحظة:
من المهم أن تفهم أنه عندما تعدل commit الأخير ، فأنت لا تقوم بإصلاحه كاستبداله بالكامل ب commit جديد ومحسّن يدفع commit القديم بعيدًا ويضع commit الجديد في مكانه. الأمر يبدو كما لو أن commit السابق لم يحدث أبدًا ، ولن يظهر في سجل المستودع الخاص بك.

إن القيمة الفعالة لوجود مثل هذا الأمر لتعديل عمليات commit هي إجراء تحسينات خفيفة على آخر commit لك ، دون تشويش سجل المستودع الخاص بك مع رسائل commit ،فتخيل أن سجل المستودع الخاص بك يحتوي على  رسائل commit مثل:"عفوًا ، نسيت إضافة ملف" أو "Darn ، إصلاح خطأ مطبعي في آخر commit".





### unstaging لملف في مرحلة staging ###

يوضح القسمان التاليان كيفية العمل مع منطقة staging والتغييرات في مجلد العمل. الجزء الجيد هو أن الأمر `git status`الذي تستخدمه لتحديد حالة هاتين المنطقتين يذكرك أيضًا بكيفية التراجع عن التغييرات عليها. على سبيل المثال ، لنفترض أنك قمت بتغيير ملفين وترغب في تنفيذ commits  كتغيرين منفصلين ، ولكنك قمت بخطأ وكتبت `* git add` ونقلهما لمرحلة stage معًا. كيف يمكنك إلغاء stage واحدة من الاثنتين؟ لنجرب ذلك معاً :
<div dir="ltr" align="left">

```git
$ git add *
$ git status
```
</div>


  يذكرك أمر `git status` كما يلي في المخرجات:

<div dir="ltr" align="left">

```git
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    renamed:    README.md -> README
    modified:   CONTRIBUTING.md
```

</div>




أسفل النص "Changes to be committed" مباشرةً ، يشير إلى استخدام `git reset HEAD <file>` ... إلى unstage. لذا ، دعنا نستخدم هذه النصائح لإلغاء stage لملف `CONTRIBUTING.md`:

<div dir="ltr" align="left">

```git
$ git reset HEAD CONTRIBUTING.md
```
</div>


ستحصل على هذه المخرجات  :

<div dir="ltr" align="left">


```git
Unstaged changes after reset:
M	CONTRIBUTING.md
```
</div>


لنتفقد الحالةبااستخدام الأمر `git status`: 

<div dir="ltr" align="left">

```git
$ git status
```
</div>


ستحصل على هذه المخرجات  :


<div dir="ltr" align="left">

```git
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    renamed:    README.md -> README

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

    modified:   CONTRIBUTING.md
```
</div>




يبدو الأمر غريباً بعض الشيء ، لكنه يعمل. تم تعديل الملف `CONTRIBUTING.md` ولكنه في مرحلة unstage.

ملاحظة:
صحيح أن أمر `git reset` يمكن أن يكون أمرًا خطيرًا ، خاصة إذا استخدمت علامة `hard--`. ومع ذلك ، في المثال الموضح أعلاه ، لم يتم لمس الملف في مجلد العمل الخاص بك ، لذلك فهو آمن نسبيًا.


### unmodifying لملف modified ###

ماذا لو تذكرت أنك لا تريد الاحتفاظ بتغييراتك على ملف`CONTRIBUTING.md`؟ كيف يمكنك بسهولة التراجع عن ذلك بمعنى ارجعها  إلى ما كانت عليه في آخر commit لك، من الجيد أن أمر `git status` يخبرك بكيفية القيام بذلك أيضًا. في مخرجات المثال الأخير ، تبدو المنطقة unstaged كما يلي:

<div dir="ltr" align="left">

```git
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

    modified:   CONTRIBUTING.md
```
</div>


ويخبرك بشكل صريح بكيفية تجاهل التغييرات التي أجريتها. دعنا نفعل ذلك:

<div dir="ltr" align="left">


```git
$ git checkout -- CONTRIBUTING.md
$ git status
```
</div>


ستحصل على هذه المخرجات  :

<div dir="ltr" align="left">


```git
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    renamed:    README.md -> README
```
</div>




يمكنك أن ترى أنه تم التراجع عن التغييرات.

ملاحظة هامة:
من المهم أن نفهم أن `git checkout -- <file>...`  أمر خطير؛ لانه قد تختفي أي تغييرات محلية أجريتها على هذا الملف  لإن Git يستبدل هذا الملف بأحدث إصدار تم الالتزام به. لا تستخدم هذا الأمر مطلقًا إلا إذا كنت تعلم تمامًا أنك لا تريد هذه التغييرات المحلية الغير المحفوظة.



### تمرين للتراجع عن الأشياء  ###

<ul>
<li>قم بإنشاء مستودع  </li>
<li>قم بإضافة ملف app.js وملف app.html</li>
<li>قم بعمل commit لهم معاً</li>
<li>قم بالتراجع عن ذلك بالنسبة للملف app.html </li>
</ul>

</div>
