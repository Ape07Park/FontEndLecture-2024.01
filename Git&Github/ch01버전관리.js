/* 

C:\Users\ape07\Desktop\Test>git init
>>>>
Reinitialized existing Git repository in C:/Users/ape07/Desktop/Test/.git/
초기화 됨. 빈 깃 저장소가 C ~~안에

C:\Users\ape07\Desktop\Test>git status
>>>>
On branch master : main 브런치에 있는 상태

No commits yet: commit한 게 없음

nothing to commit (create/copy files and use "git add" to track):commit할 파일 등이 없음

C:\Users\ape07\Desktop\Test>git add test.txt

C:\Users\ape07\Desktop\Test>git status
>>>>
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   test.txt 

- test.txt가 스테이징됨

C:\Users\ape07\Desktop\Test>git commit -m "hi"
>>>>
[master (root-commit) c331e02] hi
 1 file changed, 0 insertions(+), 0 deletions(-) // 파일 1개 변경, 0개의 내용 추가, 0개 제거
 create mode 100644 test.txt

 C:\Users\ape07\Desktop\Test>git status
 >>>>
On branch master
nothing to commit, working tree clean //커밋 할 거 없음, 작업 트리 클린

C:\Users\ape07\Desktop\Test>git log
>>>>
commit c331e0245ef449aecdba7623689b63ea6ad6abe6 (HEAD -> master)
Author: Ape07Park <ape072399@gmail.com> // 만든 사람
Date:   Sun Jan 7 15:51:56 2024 +0900 // 만든 시간

    hi // 커밋 메세지

C:\Users\ape07\Desktop\Test>git commit -am "hi2"
>>>>
[master 5313b1d] hi2
 1 file changed, 1 insertion(+)

C:\Users\ape07\Desktop\Test>git log
>>>>
commit 5313b1d4541647b18f0d5e750b3e19bb13da1696 (HEAD -> master)
Author: Ape07Park <ape072399@gmail.com>
Date:   Sun Jan 7 15:59:59 2024 +0900

    hi2

commit c331e0245ef449aecdba7623689b63ea6ad6abe6
Author: Ape07Park <ape072399@gmail.com>
Date:   Sun Jan 7 15:51:56 2024 +0900

    hi

C:\Users\ape07\Desktop\Test>git diff
>>>>
diff --git a/test.txt b/test.txt
index 32f95c0..e2b058d 100644
--- a/test.txt
+++ b/test.txt
@@ -1 +1,2 @@
-hi // 삭제
\ No newline at end of file
+h // 추가
+hello // 추가
\ No newline at end of file

C:\Users\ape07\Desktop\Test>git status
>>>>
On branch master
Changes not staged for commit: // 바꾼 것이 커밋을 위한 스테이지에 x
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   test.txt // 수정됨, 추적 o

Untracked files: // 추적 x
  (use "git add <file>..." to include in what will be committed)
        test2.txt

no changes added to commit (use "git add" and/or "git commit -a")

C:\Users\ape07\Desktop\Test>git add test.txt

C:\Users\ape07\Desktop\Test>git add test2.txt

C:\Users\ape07\Desktop\Test>git status
>>>>
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   test.txt // 추적 중
        new file:   test2.txt // 추적 추가

C:\Users\ape07\Desktop\Test>git log --stat // 커밋과 관련된 여려 로그 보여줌
>>>>
commit 5313b1d4541647b18f0d5e750b3e19bb13da1696 (HEAD -> master)
Author: Ape07Park <ape072399@gmail.com>
Date:   Sun Jan 7 15:59:59 2024 +0900

    hi2

 test.txt | 1 +
 1 file changed, 1 insertion(+)

commit c331e0245ef449aecdba7623689b63ea6ad6abe6
Author: Ape07Park <ape072399@gmail.com>
Date:   Sun Jan 7 15:51:56 2024 +0900

    hi

 test.txt | 0
 1 file changed, 0 insertions(+), 0 deletions(-)

 C:\Users\ape07\Desktop\Test>git status
 >>>>
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   test.txt
        new file:   test2.txt

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed) // git add <file>로 커밋
  (use "git restore <file>..." to discard changes in working directory) // git restore <file>로 작업한 거 변경 취소
        modified:   test.txt
        modified:   test2.txt

C:\Users\ape07\Desktop\Test>git restore test.txt
>>>> 
성공하면 아무 것도 안뜸

C:\Users\ape07\Desktop\Test>git add test2.txt

C:\Users\ape07\Desktop\Test>git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   test.txt
        new file:   test2.txt

C:\Users\ape07\Desktop\Test>git restore --staged test.txt // 마지막에 한 커밋 취소

C:\Users\ape07\Desktop\Test>git status
>>>>
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   test2.txt

Changes not staged for commit: //커밋 취소 됨
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   test.txt 

C:\Users\ape07\Desktop\Test>git commit -am "hi3"
[master 70d7fc9] hi3
 2 files changed, 7 insertions(+), 1 deletion(-)
 create mode 100644 test3.txt

C:\Users\ape07\Desktop\Test>git log
commit 70d7fc99e37176bbf22f438b65ed0d8c9399e8a9 (HEAD -> master)
Author: Ape07Park <ape072399@gmail.com>
Date:   Sun Jan 7 17:04:17 2024 +0900

    hi3

commit 5313b1d4541647b18f0d5e750b3e19bb13da1696
Author: Ape07Park <ape072399@gmail.com>
Date:   Sun Jan 7 15:59:59 2024 +0900

    hi2

commit c331e0245ef449aecdba7623689b63ea6ad6abe6
Author: Ape07Park <ape072399@gmail.com>
Date:   Sun Jan 7 15:51:56 2024 +0900

    hi




 */

