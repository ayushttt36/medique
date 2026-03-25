import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const DB_PATH = join(__dirname, './mediqura.db');

const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error('❌ Database Error:', err);
    process.exit(1);
  } else {
    console.log('✅ Connected to SQLite Database\n');
  }
});

// Function to display all tables
function showTables() {
  return new Promise((resolve) => {
    db.all(
      "SELECT name FROM sqlite_master WHERE type='table'",
      (err, rows) => {
        if (err) {
          console.error('Error:', err);
        } else {
          console.log('📊 DATABASE TABLES\n');
          console.log('='.repeat(50));
          rows.forEach((row) => {
            console.log(`  • ${row.name}`);
          });
          console.log('='.repeat(50) + '\n');
        }
        resolve();
      }
    );
  });
}

// Function to show table data
function showTableData(tableName) {
  return new Promise((resolve) => {
    db.all(`SELECT * FROM ${tableName}`, (err, rows) => {
      if (err) {
        console.error(`Error reading ${tableName}:`, err);
      } else {
        console.log(`\n📋 TABLE: ${tableName.toUpperCase()}`);
        console.log('='.repeat(80));
        
        if (rows.length === 0) {
          console.log('  (Empty - No data)');
        } else {
          console.log(`  Total Records: ${rows.length}\n`);
          
          // Display in table format
          rows.forEach((row, index) => {
            console.log(`  Record #${index + 1}:`);
            Object.entries(row).forEach(([key, value]) => {
              console.log(`    ${key}: ${value}`);
            });
            console.log('');
          });
        }
        console.log('='.repeat(80));
      }
      resolve();
    });
  });
}

// Function to get table statistics
function getStats(tableName) {
  return new Promise((resolve) => {
    db.get(`SELECT COUNT(*) as count FROM ${tableName}`, (err, row) => {
      if (err) {
        console.error(`Error:`, err);
      } else {
        if (row.count > 0) {
          console.log(`  ${tableName}: ${row.count} records`);
        }
      }
      resolve();
    });
  });
}

async function main() {
  console.log('\n🏥 MEDIQURA DATABASE VIEWER\n');
  console.log('='.repeat(80));

  // Show all tables
  await showTables();

  // Get statistics
  console.log('📈 STATISTICS\n');
  const tables = ['demo_requests', 'patients', 'patient_vitals', 'appointments', 'prescriptions'];
  for (const table of tables) {
    await getStats(table);
  }
  console.log('\n' + '='.repeat(80) + '\n');

  // Show data from each table
  for (const table of tables) {
    await showTableData(table);
  }

  // Close database
  db.close();
}

main();
