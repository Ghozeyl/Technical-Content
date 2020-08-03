<div dir="rtl" align="right">


## ٤.٣ توليد مفتاح SSH العام الخاص بك ##

### مقدمة عن توليد مفتاح SSH العام الخاص بك ###

تقوم العديد من خوادم Git بالمصادقة باستخدام مفاتيح SSH العامة. لتوفير مفتاح عام ، يجب على كل مستخدم في نظامك إنشاء مفتاح عام واحد إذا لم يكن لديه . هذه العملية متشابهة في كل أنظمة التشغيل. أولاً ، يجب عليك التحقق من أنه ليس لديك مفتاح . بشكل افتراضي ، يتم تخزين مفاتيح SSH الخاصة بالمستخدم في مجلد `ssh./~`. ويمكنك التحقق لمعرفة ما إذا كان لديك مفتاح عن طريق الانتقال إلى هذا المجلد واستعراض محتوياته كما هو موضح ادناه:


<div dir="ltr" align="left">

```git
$ cd ~/.ssh
$ ls
```
</div>


ستحصل على هذه المخرجات:

<div dir="ltr" align="left">


```git
authorized_keys2  id_dsa       known_hosts
config            id_dsa.pub
```
</div>

### كيفية توليد مفتاح SSH العام الخاص بك ###

ابحث عن زوج من الملفات في مجلد `ssh./~.` باسم مثل `id_dsa` أو `id_rsa` وملف بنفس الاسم بامتداد `pub.` .والملف الذي امتداده `pub.` هو مفتاحك العام ، والملف الآخر هو مفتاحك الخاص. إذا لم يكن لديك هذه الملفات أو لم يكن لديك مجلد `ssh.`، يمكنك إنشاؤها عن طريق تشغيل برنامج يسمى `ssh-keygen` ، والذي يتم توفيره مع حزمة SSH على أنظمة Linux / macOS ويأتي مع Git لنظام Windows
كما موضح ادناه:


<div dir="ltr" align="left">

```git
$ ssh-keygen -o
```
</div>


ستحصل على هذه المخرجات:

<div dir="ltr" align="left">


```git
Generating public/private rsa key pair.
Enter file in which to save the key (/home/schacon/.ssh/id_rsa):
Created directory '/home/schacon/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/schacon/.ssh/id_rsa.
Your public key has been saved in /home/schacon/.ssh/id_rsa.pub.
The key fingerprint is:
d0:82:24:8e:d7:f1:bb:9b:33:53:96:93:49:da:9b:e3 schacon@mylaptop.local
```
</div>



أولاً ، يؤكد المكان الذي تريد حفظ المفتاح فيه (`.ssh / id_rsa`) ، ثم يطلب منك مرتين ادخال كلمة مرور ، والتي يمكنك تركها إذا كنت لا تريد ادخال كلمة مرور عند استخدام المفتاح. ومع ذلك ، إذا كنت تريد استخدم كلمة المرور ، فتأكد من إضافة الخيار `o-` ؛ لإنه يقوم بحفظ المفتاح الخاص بك في تنسيق أكثر مقاومة للـ brute-force password cracking من التنسيق الافتراضي. يمكنك أيضًا استخدام أداة `ssh-agent` لمنع الحاجة إلى إدخال كلمة المرور في كل مرة.


### كيفية مشاركة مفتاح SSH  العام الخاص بك أو الخاص بافراد فريق العمل ###

الآن ، يجب على كل مستخدم يريد العمل معك  بإرسال مفتاحه العام إليك أو لأي شخص يدير خادمGit (بافتراض أنك تستخدم إعداد الخادم الذي يتطلب مفاتيح SSH العامة). كل ما عليهم فعله هو نسخ محتويات ملف `pub.`وإرساله بالبريد الإلكتروني. ولإستعراض المفتاح قم بالأمر التالي  :


<div dir="ltr" align="left">

```git
$ cat ~/.ssh/id_rsa.pub
```
</div>


تبدو المفاتيح العامة كما في المخرجات التالية :

<div dir="ltr" align="left">


```git
ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSU
GPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3
Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XA
t3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/En
mZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbx
NrRFi9wrf+M7Q== schacon@mylaptop.local
```
</div>


### تمرين لإاستخدام مفتاح SSH العام  ###

<ul>
<li>قم بإنشاء مستودع في Github</li>
<li>قم بنسخ مفتاح SSH الخاص بك إذا لم يكن لديك قم بإنشائه وثم نسخه</li>
<li>قم بإضافتة فيGithub</li>
</ul>

</div>
