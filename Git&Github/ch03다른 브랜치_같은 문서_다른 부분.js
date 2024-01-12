/* C:\Users\human-04\Desktop\test>git init manual-3
>>>>
Initialized empty Git repository in C:/Users/human-04/Desktop/test/manual-3/.git/

C:\Users\human-04\Desktop\test>cd manual-3

C:\Users\human-04\Desktop\test\manual-3>git add work.txt // 스테이지에 올리기

C:\Users\human-04\Desktop\test\manual-3>git commit -m "work1" // work1이라는 커밋 메세지 남기고 커밋
>>>>
[master (root-commit) afe9f71] work1
 1 file changed, 4 insertions(+)
 create mode 100644 work.txt

C:\Users\human-04\Desktop\test\manual-3>git branch o2 // o2 브랜치 만들기

C:\Users\human-04\Desktop\test\manual-3>git commit -am "main work2" 
/main work2이라는 커밋 메세지 남기고 커밋하기
>>>>
[master bb153a5] main work2
 1 file changed, 1 insertion(+)

C:\Users\human-04\Desktop\test\manual-3>git switch o2 //o2 브랜치로 이동
Switched to branch 'o2'

* o2 브랜치에서 작업 중
C:\Users\human-04\Desktop\test\manual-3>git commit -am "02 work2" 
>>>>
[o2 12c3323] 02 work2
 1 file changed, 3 insertions(+), 1 deletion(-)

C:\Users\human-04\Desktop\test\manual-3>git switch master //master 브랜치로 이동
>>>>
Switched to branch 'master'

C:\Users\human-04\Desktop\test\manual-3>git merge o2 // * master에서 o2를 합병
>>>>
Auto-merging work.txt
Merge made by the 'ort' strategy.
 work.txt | 4 +++-
 1 file changed, 3 insertions(+), 1 deletion(-) */