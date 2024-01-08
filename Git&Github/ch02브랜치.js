/*
C:\Users\ape07>cd Desktop\test2

C:\Users\ape07\Desktop\test2>git init
>>>>
Initialized empty Git repository in C:/Users/ape07/Desktop/test2/.git/

C:\Users\ape07\Desktop\test2>git add work1.txt

C:\Users\ape07\Desktop\test2>git commit -m "work1"
>>>>
[master (root-commit) 0a4d9d6] work1
 1 file changed, 1 insertion(+)
 create mode 100644 work1.txt

C:\Users\ape07\Desktop\test2>git log
>>>>
commit 0a4d9d60eaf1d2ad1b2539cd1e62207bee3cc831 (HEAD -> master) 
Author: Ape07Park <ape072399@gmail.com>
Date:   Sun Jan 7 20:50:23 2024 +0900

    work1

C:\Users\ape07\Desktop\test2>git commit -am "work2"
[master 17cd2f6] work2
 1 file changed, 2 insertions(+), 1 deletion(-)

C:\Users\ape07\Desktop\test2>git commit -am "work3"
[master a4ded85] work3
 1 file changed, 2 insertions(+), 1 deletion(-)

C:\Users\ape07\Desktop\test2>git log
>>>>
commit a4ded85935005a73d03d812d15e590bb9660ffef (HEAD -> master) // 가장 최신 커밋에 표시 됨
Author: Ape07Park <ape072399@gmail.com>
Date:   Sun Jan 7 20:51:57 2024 +0900

    work3

commit 17cd2f66d5ca6983d2f28768c8b51c413efe3596
Author: Ape07Park <ape072399@gmail.com>
Date:   Sun Jan 7 20:51:26 2024 +0900

    work2

commit 0a4d9d60eaf1d2ad1b2539cd1e62207bee3cc831
Author: Ape07Park <ape072399@gmail.com>
Date:   Sun Jan 7 20:50:23 2024 +0900

    work1

C:\Users\ape07\Desktop\test2>git branch
>>>>
* master // 기본으로 생성

C:\Users\ape07\Desktop\test2>git branch apple

C:\Users\ape07\Desktop\test2>git branch
>>>>
  apple
* master

C:\Users\ape07\Desktop\test2>git log
>>>>
commit a4ded85935005a73d03d812d15e590bb9660ffef (HEAD -> master, apple)

C:\Users\ape07\Desktop\test2>git log
>>>>
commit a4ded85935005a73d03d812d15e590bb9660ffef (HEAD -> master, ms, google, apple) // master, 여러 브랜치도 최신 커밋이 work3임
Author: Ape07Park <ape072399@gmail.com>
Date:   Sun Jan 7 20:51:57 2024 +0900

    work3

C:\Users\ape07\Desktop\test2>git commit -am "master work4" // master를 붙여 work4만 master 되게 함 
>>>>
[master ba75625] master work4
 1 file changed, 2 insertions(+), 1 deletion(-)

C:\Users\ape07\Desktop\test2>git log --oneline //log 한줄로 표시
>>>>
ba75625 (HEAD -> master) master work4 // 
a4ded85 (ms, google, apple) work3
17cd2f6 work2
0a4d9d6 work1

C:\Users\ape07\Desktop\test2>git switch apple
>>>>
Switched to branch 'apple'

C:\Users\ape07\Desktop\test2>git log --oneline
>>>>
a4ded85 (HEAD -> apple, ms, google) work3
17cd2f6 work2
0a4d9d6 work1

C:\Users\ape07\Desktop\test2>git add .

C:\Users\ape07\Desktop\test2>git commit -m "apple work4"
>>>>
[apple 8ad91ea] apple work4
 2 files changed, 3 insertions(+), 1 deletion(-)
 create mode 100644 apple.txt

C:\Users\ape07\Desktop\test2>git log --oneline
>>>>
8ad91ea (HEAD -> apple) apple work4 // apple 브랜치이며 최신 커밋은 apple work4
a4ded85 (ms, google) work3
17cd2f6 work2
0a4d9d6 work1

C:\Users\ape07\Desktop\test2>git log --oneline --branches
>>>>
8ad91ea (HEAD -> apple) apple work4
ba75625 (master) master work4
a4ded85 (ms, google) work3
17cd2f6 work2
0a4d9d6 work1

C:\Users\ape07\Desktop\test2>git log --oneline --branches --graph
>>>>
* 8ad91ea (HEAD -> apple) apple work4 // apple 브랜치의 최신 커밋은 apple work4. apple work4의 부모는 work3
| * ba75625 (master) master work4 // master 브랜치의 최신 커밋은 master work4. 부모는 work3
|/
* a4ded85 (ms, google) work3
* 17cd2f6 work2
* 0a4d9d6 work1

C:\Users\ape07\Desktop\test2>git log master..apple
>>>>
commit 8ad91ead6441a88dc6f35b04163437a66989474c (HEAD -> apple)
Author: Ape07Park <ape072399@gmail.com>
Date:   Sun Jan 7 21:31:35 2024 +0900

    apple work4


C:\Users\ape07\Desktop\test3>git init
>>>>
Initialized empty Git repository in C:/Users/ape07/Desktop/test3/.git/

C:\Users\ape07\Desktop\test3>git add work.txt

C:\Users\ape07\Desktop\test3>git commit -m "work1"
>>>>
[master (root-commit) 3f42a1b] work1
 1 file changed, 1 insertion(+)
 create mode 100644 work.txt

C:\Users\ape07\Desktop\test3>git branch o2 // 새 브랜치 생성

C:\Users\ape07\Desktop\test3>git add master.txt

C:\Users\ape07\Desktop\test3>git commit -m "master work2"
>>>>
[master 2ea82fa] master work2
 1 file changed, 1 insertion(+)
 create mode 100644 master.txt

C:\Users\ape07\Desktop\test3>git switch o2 // o2 브랜치로 이동
>>>>
Switched to branch 'o2'

* o2브랜치에서 작업 중
C:\Users\ape07\Desktop\test3>git add o2.txt

C:\Users\ape07\Desktop\test3>git commit -m "o2 work2"
>>>>
[o2 513a0f9] o2 work2
 1 file changed, 1 insertion(+)
 create mode 100644 o2.txt

C:\Users\ape07\Desktop\test3>git log --oneline --branches --graph
>>>> 
* 513a0f9 (HEAD -> o2) o2 work2 //  o2 브랜치에서 추가한 커밋
| * 2ea82fa (master) master work2 //master 브랜치에서 추가한 것
|/
* 3f42a1b work1 // master, o2 둘다 가지고 있는 것(부모)

C:\Users\ape07\Desktop\test3>git switch master
>>>>
Switched to branch 'master'

* master 브랜치에서 작업중
C:\Users\ape07\Desktop\test3>git merge o2 //o2 합병하기
>>>>
Merge made by the 'ort' strategy.
 o2.txt | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 o2.txt

C:\Users\ape07\Desktop\test3>dir
 C 드라이브의 볼륨에는 이름이 없습니다.
 볼륨 일련 번호: 9068-73EA

 C:\Users\ape07\Desktop\test3 디렉터리

2024-01-07  오후 10:00    <DIR>          .
* master 브랜치 안에 o2의 파일도 포함됨
2024-01-07  오후 09:47    <DIR>          ..
2024-01-07  오후 10:00                 1 master.txt
2024-01-07  오후 10:00                 1 o2.txt
2024-01-07  오후 09:48                 1 work.txt
               3개 파일                   3 바이트
               2개 디렉터리  121,888,481,280 바이트 남음

C:\Users\ape07\Desktop\test3>git log --oneline --branches --graph
*   294587f (HEAD -> master) Merge branch 'o2' // master가 o2 합병
|\
| * 513a0f9 (o2) o2 work2
* | 2ea82fa master work2
|/
* 3f42a1b work1

*/