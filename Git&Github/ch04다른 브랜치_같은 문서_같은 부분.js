/* C:\Users\human-04>cd Desktop

C:\Users\human-04\Desktop>cd test

C:\Users\human-04\Desktop\test>git init manual-4
>>>>
Initialized empty Git repository in C:/Users/human-04/Desktop/test/manual-4/.git/

C:\Users\human-04\Desktop\test>cd manual-4

C:\Users\human-04\Desktop\test\manual-4>git add work.txt

C:\Users\human-04\Desktop\test\manual-4>git commit -m "work 1"
>>>>
[master (root-commit) 241b6a8] work 1
 1 file changed, 5 insertions(+)
 create mode 100644 work.txt

C:\Users\human-04\Desktop\test\manual-4>git branch o2

C:\Users\human-04\Desktop\test\manual-4>git commit -am "main work2"
>>>>
[master d09913f] main work2
 1 file changed, 1 insertion(+), 1 deletion(-)

C:\Users\human-04\Desktop\test\manual-4>git switch o2
>>>>
Switched to branch 'o2'

* o2 브랜치에서 작업중 
C:\Users\human-04\Desktop\test\manual-4>git commit -am "o2 work2"
>>>>
[o2 37001fb] o2 work2
 1 file changed, 1 insertion(+), 1 deletion(-)

C:\Users\human-04\Desktop\test\manual-4>git switch master
>>>>
Switched to branch 'master'

* master에서 작업 
C:\Users\human-04\Desktop\test\manual-4>git merge o2
>>>>
Auto-merging work.txt
CONFLICT (content): Merge conflict in work.txt // 합병 문제 발생 work.txt에서 
Automatic merge failed; fix conflicts and then commit the result. // 합병 실패

C:\Users\human-04\Desktop\test\manual-4>git commit -am "merge o2 branch" 
[master a3452b7] merge o2 branch

C:\Users\human-04\Desktop\test\manual-4>git log --oneline --branches --graph 
*   a3452b7 (HEAD -> master) merge o2 branch // master가 o2 브랜치를 합병한 상태이며 계층의 가장 위에 있음
|\
| * 37001fb (o2) o2 work2
* | d09913f main work2
|/
* 241b6a8 work 1

*/

