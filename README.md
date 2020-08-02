<div dir="rtl" align="right">

## ٢.٣ أساسيات Git - عرض تاريخ commit ##

### مقدمة عن عرض تاريخ commit ###

بعد اجراء العديد من عمليات commits ، أو إذا قمت بنسخ مستودع يحتوي على سجل commit، فربما تريد استعراض commits التي حدثت. وللقيام بذلك يستخدم الأمر `git log`.



### مثال لكيفية استخدام `git log` ###

في هذه الأمثلة نستخدم مشروعًا بسيطًا جدًا يسمى "simplegit". للحصول على المشروع ، قم بتنفيذ الأمر التالي:

<div dir="ltr" align="left">

```git
$ git clone https://github.com/schacon/simplegit-progit
```
</div>

عند تشغيل امر `git log`في هذا المشروع :


<div dir="ltr" align="left">

```git
$ git log
```
</div>

يجب أن تحصل على مخرجات كالتالي:

<div dir="ltr" align="left">

```git
commit ca82a6dff817ec66f44342007202690a93763949
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Mon Mar 17 21:52:11 2008 -0700

    Change version number

commit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Sat Mar 15 16:40:33 2008 -0700

    Remove unnecessary test

commit a11bef06a3f659402fe7563abf99ad00de2209e6
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Sat Mar 15 10:31:28 2008 -0700

    Initial commit
```
</div>

في الوضع الافتراضي عند عدم وجود arguments ، يقوم أمر `git log` بسرد جميع commits التي تم القيام بها في هذا المستودع بترتيب زمني عكسي بمعنى ، تظهر أحدث commits أولاً. كما نرى ، يعرض هذا الأمر لكل commit: اسم المنفذ لها و SHA-1 checksum والبريد الإلكتروني وتاريخ التنفيذ ورسالة لتوضيح commit .

هناك عدد كبير ومتنوع من الخيارات لأمر `git log` لإظهار ما تبحث عنه بالضبط، سوف نستعرض أشهرها.


من الخيارات الأكثر فائدة هي `p-`  أو`patch--`  ، وهو يوضح الفرق الذي تم تقديمه في كل commit. يمكنك أيضًا تحديد العدد ، باستخدام -العدد مثلاً 2-  لإظهار آخر commits فقط.

كما هو موضح في المثال ادناه:

<div dir="ltr" align="left">


```git
$ git log -p -2
```

</div>

ستحصل على هذه المخرجات:

<div dir="ltr" align="left">


```git
commit ca82a6dff817ec66f44342007202690a93763949
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Mon Mar 17 21:52:11 2008 -0700

    Change version number

diff --git a/Rakefile b/Rakefile
index a874b73..8f94139 100644
--- a/Rakefile
+++ b/Rakefile
@@ -5,7 +5,7 @@ require 'rake/gempackagetask'
 spec = Gem::Specification.new do |s|
     s.platform  =   Gem::Platform::RUBY
     s.name      =   "simplegit"
-    s.version   =   "0.1.0"
+    s.version   =   "0.1.1"
     s.author    =   "Scott Chacon"
     s.email     =   "schacon@gee-mail.com"
     s.summary   =   "A simple gem for using Git in Ruby code."

commit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Sat Mar 15 16:40:33 2008 -0700

    Remove unnecessary test

diff --git a/lib/simplegit.rb b/lib/simplegit.rb
index a0a60ae..47c6340 100644
--- a/lib/simplegit.rb
+++ b/lib/simplegit.rb
@@ -18,8 +18,3 @@ class SimpleGit
     end

 end
-
-if $0 == __FILE__
-  git = SimpleGit.new
-  puts git.show
-end
```

</div>

يعرض هذا الخيار نفس المعلومات ولكن مع وجود اختلاف لكل إدخال. وهو مفيد جدًا لمراجعة الكود أو لتصفح ما حدث بسرعة خلال سلسلة من commits التي أضافها أحد المتعاونين. يمكنك أيضًا استخدام سلسلة من خيارات التلخيص مع `git log` . على سبيل المثال ، إذا كنت تريد أن ترى بعض الإحصائيات المختصرة لكل commit ، يمكنك استخدام خيار `--stat`كما هو موضح في المثال ادناه:

<div dir="ltr" align="left">


```git
$ git log --stat
```

</div>

ستحصل على هذه المخرجات:

<div dir="ltr" align="left">


```git
commit ca82a6dff817ec66f44342007202690a93763949
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Mon Mar 17 21:52:11 2008 -0700

    Change version number

 Rakefile | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)

commit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Sat Mar 15 16:40:33 2008 -0700

    Remove unnecessary test

 lib/simplegit.rb | 5 -----
 1 file changed, 5 deletions(-)

commit a11bef06a3f659402fe7563abf99ad00de2209e6
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Sat Mar 15 10:31:28 2008 -0700

    Initial commit

 README           |  6 ++++++
 Rakefile         | 23 +++++++++++++++++++++++
 lib/simplegit.rb | 25 +++++++++++++++++++++++++
 3 files changed, 54 insertions(+)
 
 ```

</div>

كما نلاحظ ، يطبع خيار `--stat` أسفل كل commit قائمة بالملفات المعدلة ، وعدد الملفات التي تم تغييرها ، وعدد الأسطر في تلك الملفات التي تمت إضافتها أو إزالتها. بالاضافة إلى ملخص للمعلومات في النهاية.


خيار آخر مفيد حقًا هو `-- pretty` . يغير هذا الخيار مخرجات log  إلى تنسيقات غير الافتراضية.وهناك بعض الخيارات للقيم مثل: `oneline` تطبع كل commit في سطر واحد ، وهو أمر مفيد جداً إذا كنت تبحث وهناك الكثير من commits . بالإضافة إلى ذلك ، `short`, و`full`,و `fuller` تعرض المخرجات بنفس التنسيق تقريبًا ولكن مع معلومات أقل أو أكثر ، مثال لاستخدام  `-- pretty` :

<div dir="ltr" align="left">


```git
$ git log --pretty=oneline
```

</div>

ستحصل على هذه المخرجات:

<div dir="ltr" align="left">


```git
ca82a6dff817ec66f44342007202690a93763949 Change version number
085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7 Remove unnecessary test
a11bef06a3f659402fe7563abf99ad00de2209e6 Initial commit
 
 ```

</div>

القيمة الأكثر أهمية للخيارات هي `format` ، التي تسمح لك بتحديد تنسيق مخرجات السجل الخاصة بك. وهو مفيد لأنك تحدد التنسيق بشكل صريح كما أنه لن يتغير مع تحديثات Gitمثال لااستخدام `format`:

<div dir="ltr" align="left">


```git
$ git log --pretty=format:"%h - %an, %ar : %s"
```

</div>

ستحصل على هذه المخرجات:

<div dir="ltr" align="left">


```git
ca82a6d - Scott Chacon, 6 years ago : Change version number
085bb3b - Scott Chacon, 6 years ago : Remove unnecessary test
a11bef0 - Scott Chacon, 6 years ago : Initial commit

 
 ```

</div>

<table style="width:80%">
     <tr>
    <th>المحدد</th>
    <th>الوصف</th>
  </tr>
  <tr>
    <th>%H</th>
    <th>Commit hash</th>
  </tr>
  <tr>
    <td>%h</td>
    <td>Commit hashالمختصرة</td>
  </tr>
  <tr>
    <td>%T</td>
    <td>Tree hash</td>
  </tr>
     <tr>
    <th>%t</th>
    <th>Tree hashالمختصرة </th>
  </tr>
  <tr>
    <td>%P</td>
    <td>Parent hashes</td>
  </tr>
      <tr>
    <th>%p</th>
    <th>Parent hashes المختصرة</th>
  </tr>
  <tr>
    <td>%an</td>
    <td>اسم المؤلف</td>
  </tr>
  <tr>
    <td>%ae</td>
    <td>البريد الإلكتروني للمؤلف</td>
  </tr>
     <tr>
    <th>%ad</th>
    <th>تاريخ المؤلف </th>
  </tr>
  <tr>
    <td>%ar</td>
    <td>تاريخ المؤلف النسبي</td>
  </tr>
  <tr>
    <td>%cn</td>
    <td>اسم المنفذ</td>
  </tr>
      <tr>
    <td>%ce</td>
    <td>البريد الإلكتروني للمنفذ</td>
  </tr>
     <tr>
    <th>%cd</th>
    <th>تاريخ المنفذ</th>
  </tr>
  <tr>
    <td>%cr</td>
    <td>تاريخ المنفذ النسبي</td>
  </tr>
  <tr>
    <td>%s</td>
    <td>الموضوع</td>
  </tr>
</table>


قد تتساءل ما هو الفرق بين المؤلف والمنفذ. المؤلف هو الشخص الذي كتب العمل في الأصل ، في حين أن المنفذ هو الشخص الذي قام بتطبيق العمل آخر مرة. لذا ، إذا قمت بإرسال تصحيحًا إلى أحد المشاريع وقام أحد الأعضاء الأساسيين بتطبيق التصحيح ، فتصبح أنت المؤلف ، والعضو هو المنفذ.قد 

خيار `format` و `oneline` تستخدم مع خيار أخر وهو `--graph`. يضيف هذا الخيار رسمًا بيانيًا لطيفًا صغيرًا لـ ASCII يُظهر الفروع وعمليات الدمج كما في المثال:

<div dir="ltr" align="left">


```git
$ git log --pretty=format:"%h %s" --graph
```

</div>

ستحصل على هذه المخرجات:

<div dir="ltr" align="left">


```git
* 2d3acf9 Ignore errors from SIGCHLD on trap
*  5e3ee11 Merge branch 'master' of git://github.com/dustin/grit
|\
| * 420eac9 Add method for getting the current branch
* | 30e367c Timeout code and tests
* | 5a09431 Add timeout protection to grit
* | e1193f8 Support for heads with slashes in them
|/
* d6016bc Require time for xmlschema
*  11d191e Merge branch 'defunkt' into local
 
 ```

</div>

وهذا النوع من المخرجات يصبح مفيداً عندما يكون هناك فروع وعمليات دمج.

الجدول ادناه يحتوي على الخيارات الاكثر استخداماً مع git log

<table style="width:80%">
     <tr>
    <th>الخيار</th>
    <th>الوصف</th>
  </tr>
  <tr>
    <th>-p</th>
    <th>عرض patch المقدمة مع كل commit.</th>
  </tr>
  <tr>
    <td>--stat</td>
    <td>عرض إحصائيات الملفات المعدلة في كل commit.</td>
  </tr>
  <tr>
    <td>--shortstat</td>
    <td>عرض سطر التغيير / الإضافة / الحذف من الأمر --stat.</td>
  </tr>
     <tr>
    <th>--name-only</th>
    <th>عرض قائمة الملفات المعدلة بعد معلوماتcommit </th>
  </tr>
  <tr>
    <td>--name-status</td>
    <td>عرض قائمة الملفات المتأثرة بالمعلومات المضافة / المعدلة / المحذوفة .</td>
  </tr>
      <tr>
    <th>--abbrev-commit</th>
    <th>عرض قليل من  الأحرف الأولى من SHA-1 checksum بدلاً من الأربعين.</th>
  </tr>
  <tr>
    <td>--relative-date</td>
    <td>عرض التاريخ بتنسيق نسبي (على سبيل المثال ، "قبل أسبوعين") بدلاً من استخدام تنسيق التاريخ بالكامل.</td>
  </tr>
  <tr>
    <td>--graph</td>
    <td>عرض الرسم البياني ASCII للفروع وعمليات الدمج بجانب مخرجات log .</td>
  </tr>
     <tr>
    <th>--pretty</th>
    <th>إظهار commits بتنسيق بديل.وهناك خيارات مثل oneline ، short، full، fuller ، و format (حيث تتيح لك ان تحدد التنسيق الخاص بك).</th>
  </tr>
  <tr>
    <td>--oneline</td>
    <td>تجمع بين الامرين --pretty=oneline و --abbrev-commit</td>
  </tr>
</table>
