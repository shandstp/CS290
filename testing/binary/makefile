all: test.exe

test.exe: main.o
	g++ -std=c++11 -o test.exe main.o
main.o: main.cpp
	g++ main.cpp -std=c++11 -c -g
clean:
	del main.o test.exe
