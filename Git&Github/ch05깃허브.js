/* C:\Users\ape07\Desktop\test1>git init // 깃 초기화(시작)
>>
Initialized empty Git repository in C:/Users/ape07/Desktop/test1/.git/

C:\Users\ape07\Desktop\test1>git add aa.txt // 스테이징

C:\Users\ape07\Desktop\test1>git commit -m "add aa" // 커밋하기
>>>>
[master (root-commit) bf32387] add aa
 1 file changed, 1 insertion(+)
 create mode 100644 aa.txt

C:\Users\ape07\Desktop\test1>git log // 로그보기
>>>>
commit bf32387f7cede3f0ca4f35ab2e1ef27feb9e3522 (HEAD -> master)
Author: Ape07Park <ape072399@gmail.com>
Date:   Sat Jan 13 14:15:09 2024 +0900

    add aa

C:\Users\ape07\Desktop\test1>git remote add origin https://github.com/Ape07Park/test.git 
* 원격 저장소에 더한다 깃허브의 원격저장소 ~~를

C:\Users\ape07\Desktop\test1>git remote -v //원격 저장소 연결 확인
>>>>
origin  https://github.com/Ape07Park/test.git (fetch)
origin  https://github.com/Ape07Park/test.git (push) 

C:\Users\ape07\Desktop\test1>git branch -M main // 기본 브랜치를 main으로 변경 

C:\Users\ape07\Desktop\test1>git push -u origin main //원격 저장소의 main 브랜치에 푸시
>>>>
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Writing objects: 100% (3/3), 206 bytes | 206.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/Ape07Park/test.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.

C:\Users\ape07\Desktop\test1>git commit -am "add 2"
>>>> 스테이징 및 커밋 동시 진행
[main b6d2e4b] add 2
 1 file changed, 2 insertions(+), 1 deletion(-)

C:\Users\ape07\Desktop\test1>git push // 푸시
>>>>
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Writing objects: 100% (3/3), 236 bytes | 236.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/Ape07Park/test.git
   bf32387..b6d2e4b  main -> main

   C:\Users\ape07\Desktop\test1>git pull
   >>>>
remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), 637 bytes | 14.00 KiB/s, done.
From https://github.com/Ape07Park/test
   b6d2e4b..a7172e4  main       -> origin/main
Updating b6d2e4b..a7172e4
Fast-forward
 new.txt | 0
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 new.txt

C:\Users\ape07\Desktop\test1>git log
>>>>
commit a7172e4e3161e47639c3c04b4a68b0afd71935eb (HEAD -> main, origin/main)
Author: Daniel Park <132667775+Ape07Park@users.noreply.github.com>
Date:   Sat Jan 13 15:33:44 2024 +0900

    add

commit b6d2e4b773bd6571c21a0dc6ca1e9691aa6b8527
Author: Ape07Park <ape072399@gmail.com>
Date:   Sat Jan 13 14:44:35 2024 +0900

    add 2

commit bf32387f7cede3f0ca4f35ab2e1ef27feb9e3522
Author: Ape07Park <ape072399@gmail.com>
Date:   Sat Jan 13 14:15:09 2024 +0900

    add aa

C:\Users\ape07\Desktop\test1>cd ..\test2

C:\Users\ape07\Desktop\test2>git init
>>>>
Initialized empty Git repository in C:/Users/ape07/Desktop/test2/.git/

C:\Users\ape07\Desktop\test2>git clone https://github.com/Ape07Park/test.git // 복제하기
>>>>
Cloning into 'test'...
remote: Enumerating objects: 9, done.
remote: Counting objects: 100% (9/9), done.
remote: Compressing objects: 100% (4/4), done.
remote: Total 9 (delta 0), reused 6 (delta 0), pack-reused 0
Receiving objects: 100% (9/9), done.

*/