export class InterviewTimer {
  private timerId: number | null = null;
  private remainingTime: number;
  private callback: (timeLeft: number) => void;

  constructor(initialTime: number, onTick: (timeLeft: number) => void) {
    this.remainingTime = initialTime;
    this.callback = onTick;
  }

  start() {
    if (this.timerId === null) {
      this.timerId = window.setInterval(() => {
        this.remainingTime--;
        this.callback(this.remainingTime);
        
        if (this.remainingTime <= 0) {
          this.stop();
        }
      }, 1000);
    }
  }

  stop() {
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  reset(newTime?: number) {
    this.stop();
    this.remainingTime = newTime ?? this.remainingTime;
    this.start();
  }
}