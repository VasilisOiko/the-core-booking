docker run -it ^
--name TheCoreBooking ^
--mount type=bind,source="\\wsl.localhost\Ubuntu\home\dev\projects\the-core-booking",target=/home/app ^
-p 3000:3000 ^
react-nextjs