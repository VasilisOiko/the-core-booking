docker run -it ^
--name TheCoreBooking ^
--mount type=bind,source=".",target=/home/app ^
-p 3000:3000 ^
react-nextjs