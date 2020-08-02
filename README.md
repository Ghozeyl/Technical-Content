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


من الخيارات الأكثر فائدة هي `p-`  أو`patch--`  ، وهو يوضح الفرق الذي تم تقديمه في كل commit. يمكنك أيضًا تحديد العدد ، باستخدام -العدد مثلاً 2-  لإظهار آخر إدخالين فقط.

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
