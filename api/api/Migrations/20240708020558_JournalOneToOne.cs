using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class JournalOneToOne : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b411df72-b4b1-4dec-aa5c-7ebc67cd14cd");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f32c3fef-97ee-44f9-9791-c489e5b87e2c");

            migrationBuilder.AddColumn<string>(
                name: "AppUserId",
                table: "Journals",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "12517552-c5b9-4f50-83dc-e17a5784efd9", null, "User", "USER" },
                    { "82269b21-d1ac-4baa-b842-4849f96cfddb", null, "Admin", "ADMIN" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Journals_AppUserId",
                table: "Journals",
                column: "AppUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Journals_AspNetUsers_AppUserId",
                table: "Journals",
                column: "AppUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Journals_AspNetUsers_AppUserId",
                table: "Journals");

            migrationBuilder.DropIndex(
                name: "IX_Journals_AppUserId",
                table: "Journals");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "12517552-c5b9-4f50-83dc-e17a5784efd9");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "82269b21-d1ac-4baa-b842-4849f96cfddb");

            migrationBuilder.DropColumn(
                name: "AppUserId",
                table: "Journals");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "b411df72-b4b1-4dec-aa5c-7ebc67cd14cd", null, "Admin", "ADMIN" },
                    { "f32c3fef-97ee-44f9-9791-c489e5b87e2c", null, "User", "USER" }
                });
        }
    }
}
