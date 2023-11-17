const formatTime = (m, s) => {
  console.log(`${m.toString().padStart(2, 0)}:${s.toString().padStart(2, 0)}`);
};
formatTime(5, 30);
