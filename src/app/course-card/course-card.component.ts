import { Component, Input, OnInit, Output } from "@angular/core";
import { COURSES } from "src/db-data";
import { Course } from "../model/course";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  ngOnInit() {}

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  cardClasses() {
    if (this.course.category == "BEGINNER") {
      return "beginner";
    } else if (this.course.category == "ADVANCED") {
      return "advanced";
    }
  }

  cardStyles() {
    return {
      "text-decoration": "underline",
    };
  }

  onCourseViewed() {
    console.log("card component - button clicked ...");
    this.courseSelected.emit(this.course);
  }
}
